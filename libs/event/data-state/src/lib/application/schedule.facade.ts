import { ServerService, StateStore } from '@confs/shared/data-access';

interface Scheduletate {
  loading: boolean;
  message: string | null;
  talks: string[];
}

export class ScheduleFacade extends StateStore<Scheduletate> {
  loading$ = this.select((state) => state.loading);

  message$ = this.select((state) => state.message);

  constructor(readonly serverService: ServerService) {
    super({
      loading: false,
      message: null,
      talks: [],
    });
  }
}
