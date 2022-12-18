import {
  Input,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, interval, map, takeWhile } from 'rxjs';
import { StateStore } from '@confs/shared/data-access';

export interface CounterState {
  loading: boolean;
  day: string;
  hour: string;
  min: string;
  sec: string;
}

export interface CounterRecord {
  day: string;
  hour: string;
  min: string;
}

@Component({
  selector: 'confs-event-feature-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="value$ | async as time">
      <span>
        <var>{{ time.day }}</var>
        <small> dias </small>
      </span>
      <span>
        <var>{{ time.hour }}</var>
        <small> horas </small>
      </span>
      <span>
        <var>{{ time.min }}</var>
        <small> minutos </small>
      </span>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        column-gap: 16px;
        padding: 0 24px;
      }
      :host var {
        font-size: 100%;
      }

      :host small {
        font-size: 80%;
        opacity: 0.7;
        font-style: italic;
      }
    `,
  ],
})
export class EventFeatureCounterComponent extends StateStore<CounterState> {
  @Input()
  public set date(value: Date) {
    this.start(value);
  }

  @Input()
  value?: Observable<CounterRecord>;

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
    this.setState({ loading: false });

    const end = date.getTime();
    const now = new Date().getTime();
    const diff = (end - now) / 1000;
    this.setState({
      day: this.day(diff),
      hour: this.hour(diff),
      min: this.min(diff),
      sec: this.sec(diff),
    });

    interval(1000 * 60)
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
