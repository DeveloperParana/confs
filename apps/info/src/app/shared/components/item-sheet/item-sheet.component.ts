import { Component, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Schedule } from '../../../types';

@Component({
  templateUrl: './item-sheet.component.html',
  styleUrls: ['./item-sheet.component.scss'],
})
export class ItemSheetComponent {
  liked = false;

  constructor(
    readonly ref: MatBottomSheetRef<ItemSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) readonly data: Schedule
  ) {}

  like() {
    this.liked = !this.liked;
  }
}
