import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {marked} from 'marked';

@Pipe({
  name: 'mdToHtml',
})
export class MdToHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(marked(value));
  }
}
