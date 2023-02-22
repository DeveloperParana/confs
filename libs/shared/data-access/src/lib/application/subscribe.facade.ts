import {ServerService} from '../infrastructure/server.service';
import {StateStore} from '../+store/state.store';
import {catchError, finalize, Observable, Subscription} from 'rxjs';
import {HttpErrorResponse} from '@confs/shared/api-interfaces';

interface SubscribeState {
  loading: boolean;
  message: string | null;
  subscribed: boolean;
}

export class SubscribeFacade extends StateStore<SubscribeState> {
  loading$ = this.select((state) => state.loading);

  subscribed$ = this.select((state) => state.subscribed);

  message$ = this.select((state) => state.message);

  constructor(readonly serverService: ServerService) {
    super({
      loading: false,
      message: null,
      subscribed: false,
    });
  }

  subscribe(value: {email: string}) {
    this.setState({loading: true});

    const sub$ = this.serverService.post('subscribe', value);

    const $sub: Subscription = sub$
      .pipe(
        catchError(this.handleError()),
        finalize(() => $sub.unsubscribe())
      )
      .subscribe(() => {
        const message = 'Aguarde nossas novidades';
        this.setState({loading: false, subscribed: true, message});
      });
  }

  handleError(defaultMessage = '') {
    return <T>(err: HttpErrorResponse, caught: Observable<T>) => {
      if (err) {
        const {message = defaultMessage} = err.error;
        this.setState({loading: false, message});
        throw err;
      }

      return caught;
    };
  }
}
