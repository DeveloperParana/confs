import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot} from './activated-route-snapshot';
import {ParamMap} from './param-map';
import {Params} from './params';
import {Route} from './route';
import {Data} from './data';

export abstract class ActivatedRoute {
  abstract url: Observable<string[]>;
  abstract params: Observable<Params>;
  abstract queryParams: Observable<Params>;
  abstract fragment: Observable<string | null>;
  abstract data: Observable<Data>;
  abstract outlet: string;
  abstract snapshot: ActivatedRouteSnapshot;
  abstract readonly title: Observable<string | undefined>;
  abstract get routeConfig(): Route | null;
  abstract get root(): ActivatedRoute;
  abstract get parent(): ActivatedRoute | null;
  abstract get firstChild(): ActivatedRoute | null;
  abstract get children(): ActivatedRoute[];
  abstract get pathFromRoot(): ActivatedRoute[];
  abstract get paramMap(): Observable<ParamMap>;
  abstract get queryParamMap(): Observable<ParamMap>;
  abstract toString(): string;
}
