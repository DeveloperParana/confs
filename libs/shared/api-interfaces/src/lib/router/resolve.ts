import { ActivatedRouteSnapshot } from './activated-route-snapshot';
import { RouterStateSnapshot } from './router-state-snapshot';
import { Observable } from 'rxjs';

export interface Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<T> | Promise<T> | T;
}
