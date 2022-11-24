import { ParamMap } from './param-map';
import { Params } from './params';
import { Data } from './data';

export declare class ActivatedRouteSnapshot {
  /** The URL segments matched by this route */
  url: string[];
  /**
   *  The matrix parameters scoped to this route.
   *
   *  You can compute all params (or data) in the router state or to get params outside
   *  of an activated component by traversing the `RouterState` tree as in the following
   *  example:
   *  ```
   *  collectRouteParams(router: Router) {
   *    let params = {};
   *    let stack: ActivatedRouteSnapshot[] = [router.routerState.snapshot.root];
   *    while (stack.length > 0) {
   *      const route = stack.pop()!;
   *      params = {...params, ...route.params};
   *      stack.push(...route.children);
   *    }
   *    return params;
   *  }
   *  ```
   */
  params: Params;
  /** The query parameters shared by all the routes */
  queryParams: Params;
  /** The URL fragment shared by all the routes */
  fragment: string | null;
  /** The static and resolved data of this route */
  data: Data;
  /** The outlet name of the route */
  outlet: string;
  /** The component of the route */
  // component: Type<any> | null;
  /** The configuration used to match this route **/
  // readonly routeConfig: Route | null;
  /** The resolved route title */
  get title(): string | undefined;
  /** The root of the router state */
  get root(): ActivatedRouteSnapshot;
  /** The parent of this route in the router state tree */
  get parent(): ActivatedRouteSnapshot | null;
  /** The first child of this route in the router state tree */
  get firstChild(): ActivatedRouteSnapshot | null;
  /** The children of this route in the router state tree */
  get children(): ActivatedRouteSnapshot[];
  /** The path from the root of the router state tree to this route */
  get pathFromRoot(): ActivatedRouteSnapshot[];
  get paramMap(): ParamMap;
  get queryParamMap(): ParamMap;
  toString(): string;
}
