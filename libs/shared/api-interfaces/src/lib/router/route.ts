import {Data} from './data';

export declare interface Route {
  // title?: string | Type<Resolve<string>> | ResolveFn<string>;
  path?: string;
  pathMatch?: 'prefix' | 'full';
  // matcher?: UrlMatcher;
  // component?: Type<any>;
  // loadComponent?: () => Type<unknown> | Observable<Type<unknown> | DefaultExport<Type<unknown>>> | Promise<Type<unknown> | DefaultExport<Type<unknown>>>;
  redirectTo?: string;
  outlet?: string;
  // canActivate?: Array<CanActivateFn | any>;

  // canMatch?: Array<Type<CanMatch> | InjectionToken<CanMatchFn> | CanMatchFn>;
  /**
   * An array of `CanActivateChildFn` or DI tokens used to look up `CanActivateChild()` handlers,
   * in order to determine if the current user is allowed to activate
   * a child of the component. By default, any user can activate a child.
   *
   * When using a function rather than DI tokens, the function can call `inject` to get any required
   * dependencies. This `inject` call must be done in a synchronous context.
   */
  // canActivateChild?: Array<CanActivateChildFn | any>;
  /**
   * An array of `CanDeactivateFn` or DI tokens used to look up `CanDeactivate()`
   * handlers, in order to determine if the current user is allowed to
   * deactivate the component. By default, any user can deactivate.
   *
   * When using a function rather than DI tokens, the function can call `inject` to get any required
   * dependencies. This `inject` call must be done in a synchronous context.
   */
  // canDeactivate?: Array<CanDeactivateFn<any> | any>;
  /**
   * An array of `CanLoadFn` or DI tokens used to look up `CanLoad()`
   * handlers, in order to determine if the current user is allowed to
   * load the component. By default, any user can load.
   *
   * When using a function rather than DI tokens, the function can call `inject` to get any required
   * dependencies. This `inject` call must be done in a synchronous context.
   */
  // canLoad?: Array<CanLoadFn | any>;
  /**
   * Additional developer-defined data provided to the component via
   * `ActivatedRoute`. By default, no additional data is passed.
   */
  data?: Data;
  /**
   * A map of DI tokens used to look up data resolvers. See `Resolve`.
   */
  // resolve?: ResolveData;
  /**
   * An array of child `Route` objects that specifies a nested route
   * configuration.
   */
  // children?: Routes;
  /**
   * An object specifying lazy-loaded child routes.
   */
  // loadChildren?: LoadChildren;
  /**
   * Defines when guards and resolvers will be run. One of
   * - `paramsOrQueryParamsChange` : Run when query parameters change.
   * - `always` : Run on every execution.
   * By default, guards and resolvers run only when the matrix
   * parameters of the route change.
   *
   * @see RunGuardsAndResolvers
   */
  // runGuardsAndResolvers?: RunGuardsAndResolvers;
  /**
   * A `Provider` array to use for this `Route` and its `children`.
   *
   * The `Router` will create a new `EnvironmentInjector` for this
   * `Route` and use it for this `Route` and its `children`. If this
   * route also has a `loadChildren` function which returns an `NgModuleRef`, this injector will be
   * used as the parent of the lazy loaded module.
   */
  // providers?: Array<Provider | EnvironmentProviders>;
}
