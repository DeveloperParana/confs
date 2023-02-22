import {NgModule} from '@angular/core';
import {InSlotPipe} from './pipes/in-slot.pipe';
import {MatSharedModule} from './mat-shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ItemSheetComponent} from './components/item-sheet/item-sheet.component';

@NgModule({
  declarations: [InSlotPipe, ItemSheetComponent],
  imports: [CommonModule, MatSharedModule, ReactiveFormsModule],
  exports: [InSlotPipe, ItemSheetComponent],
})
export class SharedModule {}
