import { ApiService } from '@confs/auth/data-access';
import { State } from '@confs/shared/data-state';

interface Scheduletate {
  loading: boolean;
  talks: string[];
}

export class ScheduleFacade extends State<Scheduletate> {
  constructor(readonly authService: ApiService) {
    super({
      loading: false,
      talks: [],
    });
  }
}
