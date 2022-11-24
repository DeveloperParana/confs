import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from './activated-route-snapshot';
import { ParamMap } from './param-map';
import { Params } from './params';
import { Route } from './route';
import { Data } from './data';

export abstract class ActivatedRoute {
  /** An observable of the URL segments matched by this route. */
  abstract url: Observable<string[]>;
  /** An observable of the matrix parameters scoped to this route. */
  abstract params: Observable<Params>;
  /** An observable of the query parameters shared by all the routes. */
  abstract queryParams: Observable<Params>;
  /** An observable of the URL fragment shared by all the routes. */
  abstract fragment: Observable<string | null>;
  /** An observable of the static and resolved data of this route. */
  abstract data: Observable<Data>;
  /** The outlet name of the route, a constant. */
  abstract outlet: string;
  /** The component of the route, a constant. */
  // component: Type<any> | null;
  /** The current snapshot of this route */
  abstract snapshot: ActivatedRouteSnapshot;
  /** An Observable of the resolved route title */
  abstract readonly title: Observable<string | undefined>;
  /** The configuration used to match this route. */
  abstract get routeConfig(): Route | null;
  /** The root of the router state. */
  abstract get root(): ActivatedRoute;
  /** The parent of this route in the router state tree. */
  abstract get parent(): ActivatedRoute | null;
  /** The first child of this route in the router state tree. */
  abstract get firstChild(): ActivatedRoute | null;
  /** The children of this route in the router state tree. */
  abstract get children(): ActivatedRoute[];
  /** The path from the root of the router state tree to this route. */
  abstract get pathFromRoot(): ActivatedRoute[];
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  abstract get paramMap(): Observable<ParamMap>;
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  abstract get queryParamMap(): Observable<ParamMap>;
  abstract toString(): string;
}
