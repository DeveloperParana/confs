import { ServerApiService } from '@confs/shared/data-access';
import { State } from '@confs/shared/data-state';

interface SubscribeState {
  loading: boolean;
  error: string | null;
  message: string | null;
  subscribed: boolean;
}

export class SubscribeFacade extends State<SubscribeState> {
  loading$ = this.select((state) => state.loading);

  subscribed$ = this.select((state) => state.subscribed);

  message$ = this.select((state) => state.message);

  error$ = this.select((state) => state.error);

  constructor(readonly authService: ServerApiService) {
    super({
      loading: false,
      error: null,
      message: null,
      subscribed: false,
    });
  }

  subscribe(value: { email: string }) {
    this.setState({ loading: true });
    this.authService.post$('subscribe', value).subscribe(() => {
      const message = 'Aguarde nossas novidades';
      this.setState({ loading: false, subscribed: true, message });
    });
  }
}
