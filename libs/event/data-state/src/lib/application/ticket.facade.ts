import { map } from 'rxjs';

import { ApiService, OAuthStorage } from '@confs/auth/data-access';
import { AccessTokenResponse } from '@confs/auth/api-interfaces';
import { State } from '@confs/shared/data-state';

import { mapToTicketUser } from '../utilities';
import { TicketUser } from '../entities';

interface TicketState {
  loading: boolean;
  error: string | null;
  user: TicketUser | null;
}

export class TicketFacade extends State<TicketState> {
  loading$ = this.select((state) => state.loading);

  user$ = this.select((state) => state.user);

  storage = new OAuthStorage<AccessTokenResponse>(localStorage);

  constructor(readonly apiService: ApiService) {
    super({
      loading: false,
      error: null,
      user: null,
    });
  }

  loadUserFromLogin(username: string) {
    this.setState({ loading: true });

    const user$ = this.apiService
      .findUserByLogin(username)
      .pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }

  loadUserFromId(id: string) {
    this.setState({ loading: true });

    const user$ = this.apiService.findUserById(id).pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }
}
