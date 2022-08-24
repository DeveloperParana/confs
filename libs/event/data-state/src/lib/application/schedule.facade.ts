import { Http, StateStore } from '@confs/shared/data-access';

interface Scheduletate {
  loading: boolean;
  talks: string[];
}

export class ScheduleFacade extends StateStore<Scheduletate> {
  constructor(readonly httpService: Http) {
    super({
      loading: false,
      talks: [],
    });
  }
}
