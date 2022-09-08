import { StateStore } from '@confs/shared/data-access';
import { interval, map, takeWhile } from 'rxjs';

export interface CountdownState {
  loading: boolean;
  day: string;
  hour: string;
  min: string;
  sec: string;
}

export class CountdownFacade extends StateStore<CountdownState> {
  loading$ = this.select((state) => state.loading);

  value$ = this.select(({ day, hour, min, sec }) => {
    return { day, hour, min, sec };
  });

  constructor() {
    super({
      loading: true,
      day: '0',
      hour: '0',
      min: '0',
      sec: '0',
    });
  }

  start(date: Date) {
    const end = date.getTime();

    this.setState({ loading: false });

    interval(1000)
      .pipe(
        map(() => new Date().getTime()),
        takeWhile((now: number) => end >= now),
        map((now) => (end - now) / 1000)
      )
      .subscribe((diff) => {
        this.setState({
          day: this.day(diff),
          hour: this.hour(diff),
          min: this.min(diff),
          sec: this.sec(diff),
        });
      });
  }

  private day(diff: number) {
    const day = Math.floor(diff / 3600 / 24);
    return `${day}`.padStart(2, '0');
  }
  private hour(diff: number) {
    const hour = Math.floor(diff / 3600) % 24;
    return `${hour}`.padStart(2, '0');
  }
  private min(diff: number) {
    const min = Math.floor(diff / 60) % 60;
    return `${min}`.padStart(2, '0');
  }
  private sec(diff: number) {
    const sec = Math.floor(diff % 60);
    return `${sec}`.padStart(2, '0');
  }
}
