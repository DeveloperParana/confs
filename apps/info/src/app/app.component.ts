import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  Type,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppStore } from './app.store';
import { interval, map } from 'rxjs';
import { Schedule } from './types';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ItemSheetComponent } from './shared/components/item-sheet/item-sheet.component';

@Component({
  selector: 'info-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'info';

  now$ = interval(10000).pipe(map(() => new Date()));

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  inSlot(slot: Date) {
    const now = new Date();
    return slot.getHours() === now.getHours() && slot.getMinutes();
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    readonly sheet: MatBottomSheet,
    readonly store: AppStore,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.store.loadSchedule();
  }

  viewItem(item: Schedule) {
    const sheet = this.openItem(ItemSheetComponent, item);
    sheet.afterDismissed().subscribe((response) => {
      console.log(response);
      if (response) this.store.addSchedule(response)
    });
  }

  openItem<C extends Type<any>, D>(component: C, data: D) {
    return this.sheet.open<C, D, D>(component, {
      panelClass: 'item-sheet-container',
      data,
    });
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
