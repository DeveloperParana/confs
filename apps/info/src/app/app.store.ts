import {
  eachMinuteOfInterval,
  differenceInMinutes,
  isSameHour,
} from 'date-fns';
import { StateStore } from '@confs/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from './types/schedule';
import { Place, Kind } from './types';
import { forkJoin, map, take } from 'rxjs';

function freeze<T>(value: T): Readonly<T> {
  return Object.freeze(value);
}

interface CurrentTalk {
  auditorium?: Schedule;
  inspire?: Schedule;
}

const slots = [
  'Sat Mar 11 2023 09:00:00',
  'Sat Mar 11 2023 10:00:00',
  'Sat Mar 11 2023 10:30:00',
  'Sat Mar 11 2023 11:00:00',
  'Sat Mar 11 2023 13:30:00',
  'Sat Mar 11 2023 14:30:00',
  'Sat Mar 11 2023 15:30:00',
  'Sat Mar 11 2023 16:30:00',
  'Sat Mar 11 2023 17:30:00',
  'Sat Mar 11 2023 18:30:00',
];

interface AppState {
  loading: boolean;
  slots: Date[];
  schedule: Schedule[];
  auditorium: Schedule[];
  inspire: Schedule[];
  current: CurrentTalk;
}

const initialState = freeze<AppState>({
  loading: false,
  schedule: [],
  auditorium: [],
  inspire: [],
  current: {},
  slots: eachMinuteOfInterval(
    {
      start: new Date(2023, 3, 19, 8),
      end: new Date(2023, 3, 19, 20),
    },
    { step: 30 }
  ),
});

@Injectable()
export class AppStore extends StateStore<AppState> {
  loading$ = this.select((state) => state.loading);

  schedule$ = this.select((state) => state.schedule);
  auditorium$ = this.select((state) => state.auditorium);
  inspire$ = this.select((state) => state.inspire);

  slots$ = this.select((state) => state.slots);

  schedule: Schedule[] = [];

  favorites = new Map<Date, Schedule>();

  constructor(private http: HttpClient) {
    super(initialState);
  }

  loadSchedule() {
    this.setState({ loading: true });
    const auditorium$ = this.http
      .get<Schedule[]>('./assets/data/auditorium.json')
      .pipe(
        map((items) =>
          items.map((item) => ({ ...item, start: new Date(item.start) }))
        )
      );
    const inspire$ = this.http
      .get<Schedule[]>('./assets/data/inspire.json')
      .pipe(
        map((items) =>
          items.map((item) => ({ ...item, start: new Date(item.start) }))
        )
      );

    forkJoin([auditorium$, inspire$])
      .pipe(take(1))
      .subscribe(([auditorium, inspire]) => {
        this.setState({ loading: false, auditorium, inspire });
      });
  }

  addSchedule(item: Schedule) {
    this.favorites.set(item.start, item);
    this.setState({ schedule: Array.from(this.favorites.values()) });
  }

  removeSchedule(item: Schedule) {
    this.favorites.delete(item.start);
    this.setState({ schedule: Array.from(this.favorites.values()) });
  }

  loadCurrent() {
    const talks = this.schedule.filter((item) => item.kind === Kind.Talk);
    console.log(talks);
    // console.log(auditorium);
  }

  filterSchedule(place: Place | null, kind: Kind | null) {
    this.setState({ loading: true });
    // this.setState({ schedule, loading: false });
  }
}
