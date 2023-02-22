import {Pipe, PipeTransform} from '@angular/core';
import {addMinutes} from 'date-fns';

@Pipe({name: 'inSlot'})
export class InSlotPipe implements PipeTransform {
  transform(current: Date, duration: number = 60) {
    const date = new Date();
    const start = new Date();
    start.setHours(current.getHours());
    start.setMinutes(current.getMinutes());
    return date > start && date < addMinutes(start, duration);
  }
}
