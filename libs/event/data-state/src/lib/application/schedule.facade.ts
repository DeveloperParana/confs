import { Http, State } from '@confs/shared/data-access';

interface Scheduletate {
  loading: boolean;
  talks: string[];
}

export class ScheduleFacade extends State<Scheduletate> {
  constructor(readonly httpService: Http) {
    super({
      loading: false,
      talks: [],
    });
  }
}
