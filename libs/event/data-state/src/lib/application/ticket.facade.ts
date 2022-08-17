import { map } from 'rxjs';

import { GithubApiService } from '@confs/auth/data-access';
import { TicketUser } from '@confs/auth/api-interfaces';
import { State } from '@confs/shared/data-state';

import { mapToTicketUser } from '../utilities';

interface TicketState {
  loading: boolean;
  user: TicketUser | null;
}

export class TicketFacade extends State<TicketState> {
  loading$ = this.select((state) => state.loading);

  user$ = this.select((state) => state.user);

  constructor(readonly githubApiService: GithubApiService) {
    super({
      loading: false,
      user: null,
    });
  }

  loadUserFromLogin(username: string) {
    this.setState({ loading: true });

    const user$ = this.githubApiService
      .findUserByLogin(username)
      .pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }

  loadUserFromId(id: string) {
    this.setState({ loading: true });

    const user$ = this.githubApiService
      .findUserById(id)
      .pipe(map(mapToTicketUser));

    const $user = user$.subscribe((user) => {
      this.setState({ loading: false, user });
      $user.unsubscribe();
    });
  }
}
