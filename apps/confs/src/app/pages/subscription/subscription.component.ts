import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'confs-subscription, section[confs-subscription]',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  constructor(
    public authService: AuthService
  ) {


  }

  login() {
    this.authService.signInGithub()
    this.authService.auth.user.subscribe(console.log)
    // this.authService.auth.currentUser.then(user => {
    //   console.log(user);

    // })
  }
}
