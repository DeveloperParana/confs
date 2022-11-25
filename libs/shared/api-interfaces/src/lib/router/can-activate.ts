import { Observable } from 'rxjs';

import { ActivatedRouteSnapshot } from './activated-route-snapshot';
import { RouterStateSnapshot } from './router-state-snapshot';

export interface CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean;
}
