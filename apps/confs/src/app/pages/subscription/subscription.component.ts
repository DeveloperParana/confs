import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'confs-subscription, section[confs-subscription]',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  url!: string;
  constructor(public authService: AuthService, private route: ActivatedRoute) {
    const { id } = this.route.snapshot.params;
    const text =
      'Fala, dev! participarei de um evento presencial organizado pelo DevPr, vamos fazer network e aprender novas tecnologias.%0D%0DJunte-se a mim pelo link:';
    const eventUrl = `devpr.org/${id}`;

    if ('id' in this.route.snapshot.params) {
      this.url = `http://twitter.com/share?text=${text}&url=${eventUrl}&hashtags=DevPrConf&via=DevPr`;
      this.authService.loadUserUrl(id);
    }

    this.authService.githubUser$.subscribe((user) => {
      if (user.login) {
        this.url = `http://twitter.com/share?text=${text}&url=devpr.org/#/${user.login}&hashtags=DevPrConf&via=DevPr`;
      }
    });
  }

  login() {
    this.authService.signInGithub();
  }

  async ngOnInit() {
    const user = await this.authService.auth.currentUser;
  }
}
