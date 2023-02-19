import { Pipe, PipeTransform } from '@angular/core';
import { addMinutes } from 'date-fns';

@Pipe({ name: 'inSlot' })
export class InSlotPipe implements PipeTransform {
  transform(current: Date, duration: number = 60) {
    const date = new Date(2023, 2, 11, 15);

    return current > date && current < addMinutes(date, duration);
  }
}
