import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AdsService } from '@confs/shared/data-access';

@Component({
  selector: 'confs-event-feature-c4p',
  templateUrl: './event-feature-c4p.component.html',
  styleUrls: ['./event-feature-c4p.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureC4pComponent implements AfterViewInit {
  @ViewChild('dialogEl', {
    static: true,
  })
  readonly _dialogRef!: ElementRef<HTMLDialogElement>;
  dialogEl!: HTMLDialogElement;

  benefits = [
    'Aprendizado contínuo',
    'Fortalecer seu networking',
    'Criar novos laços de amizades',
    'Conhecer outros lugares',
    'Conhecer outras culturas',
    'Praticar oratória',
  ];
  constructor(private adsService: AdsService) {}

  ngAfterViewInit() {
    const dialog = this._dialogRef.nativeElement;
    function onClick({ target }: MouseEvent) {
      if (target === dialog) dialog.close();
    }
    dialog.addEventListener('click', onClick);
  }

  submit() {
    this.adsService.dispatchEvent('c4p');

    const features = `rel="external,noopener,nofollow,width=640,height=920"`;
    open('https://bit.ly/devprconf', '_blank', features);
  }
}
