import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  templateUrl: './event-feature-media-kit.component.html',
  styleUrls: ['./event-feature-media-kit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureMediaKitComponent {
  private _current = new BehaviorSubject<number>(0);
  readonly current$ = this._current.asObservable();

  items = [
    '/assets/media-kit/media-kit-0.webp',
    '/assets/media-kit/media-kit-1.webp',
    '/assets/media-kit/media-kit-2.webp',
    '/assets/media-kit/media-kit-4.webp',
    '/assets/media-kit/media-kit-3.webp',
    '/assets/media-kit/media-kit-5.webp',
    '/assets/media-kit/media-kit-6.webp',
    '/assets/media-kit/media-kit-7.webp',
    '/assets/media-kit/media-kit-8.webp',
    '/assets/media-kit/media-kit-9.webp',
    '/assets/media-kit/media-kit-10.webp',
    '/assets/media-kit/media-kit-11.webp',
    '/assets/media-kit/media-kit-12.webp',
    '/assets/media-kit/media-kit-13.webp',
    '/assets/media-kit/media-kit-14.webp',
    '/assets/media-kit/media-kit-15.webp',
    '/assets/media-kit/media-kit-16.webp',
    '/assets/media-kit/media-kit-17.webp',
    '/assets/media-kit/media-kit-18.webp',
    '/assets/media-kit/media-kit-19.webp',
    '/assets/media-kit/media-kit-20.webp',
    '/assets/media-kit/media-kit-21.webp',
  ];

  min$ = this.current$.pipe(map((value) => value === 0));

  max$ = this.current$.pipe(map((value) => value >= this.items.length - 1));

  prev() {
    const current = this._current.value;
    this._current.next(current - 1);
  }

  next() {
    const current = this._current.value;
    this._current.next(current + 1);
  }
}
