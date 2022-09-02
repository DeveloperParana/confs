import {
  OnInit,
  Inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ProjectFacade } from '@confs/shared/project/data-access';

@Component({
  selector: 'confs-event-speakers',
  templateUrl: './event-speakers.component.html',
  styleUrls: ['./event-speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSpeakersComponent implements OnInit {
  constructor(
    readonly projectFacade: ProjectFacade,
    @Inject('speakers.id') readonly speakersId: number
  ) {}

  ngOnInit() {
    this.projectFacade.loadProjectColumnCards(this.speakersId);
  }
}
