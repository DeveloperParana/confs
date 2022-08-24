import { Http } from '@confs/shared/data-access';
import { State } from '@confs/shared/data-state';

interface SubscribeState {
  loading: boolean;
  message: string | null;
  subscribed: boolean;
}

export class SubscribeFacade extends State<SubscribeState> {
  loading$ = this.select((state) => state.loading);

  subscribed$ = this.select((state) => state.subscribed);

  message$ = this.select((state) => state.message);

  constructor(readonly http: Http) {
    super({
      loading: false,
      message: null,
      subscribed: false,
    });
  }

  subscribe(value: { email: string }) {
    this.setState({ loading: true });

    const sub$ = this.http.post('subscribe', value);

    const $sub = sub$.subscribe(() => {
      const message = 'Aguarde nossas novidades';
      this.setState({ loading: false, subscribed: true, message });
      $sub.unsubscribe();
    });
  }
}
