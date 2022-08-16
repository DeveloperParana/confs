import { GithubApiService } from '@confs/auth/data-access';
import { State } from '@confs/shared/data-state';

interface Scheduletate {
  loading: boolean;
  talks: string[];
}

export class ScheduleFacade extends State<Scheduletate> {
  constructor(readonly authService: GithubApiService) {
    super({
      loading: false,
      talks: [],
    });
  }
}
