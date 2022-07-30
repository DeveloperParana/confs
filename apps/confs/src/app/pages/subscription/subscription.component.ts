import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'confs-subscription, section[confs-subscription]',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  constructor(public authService: AuthService, private route: ActivatedRoute) {}
  public userId: any = this.route.snapshot.params['id'];
  public text =
    'Fala, dev! participarei de um evento presencial organizado pelo DevPr, vamos fazer network e aprender novas tecnologias.\n\nJunte-se a mim pelo link:';
  public eventUrl = `https://github.com/${this.userId}`;
  public url = `http://twitter.com/share?text=${this.text}&url=${this.eventUrl}&hashtags=DevPrConf&via=DevPr`;

  login() {
    this.authService.signInGithub();
    this.authService.auth.user.subscribe(console.log);
    // this.authService.auth.currentUser.then(user => {
    //   console.log(user);

    // })
  }
}
