import { ActivatedRoute } from './activated-route';
import { Params } from './params';
import { Routes } from './routes';

export type QueryParamsHandling = 'merge' | 'preserve' | '';

export interface UrlCreationOptions {
  relativeTo?: ActivatedRoute | null;
  queryParams?: Params | null;
  fragment?: string;
  queryParamsHandling?: QueryParamsHandling | null;
  preserveFragment?: boolean;
}

export interface NavigationBehaviorOptions {
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {
    [k: string]: any;
  };
}

export interface NavigationExtras
  extends UrlCreationOptions,
    NavigationBehaviorOptions {}

export interface NavigationExtras
  extends UrlCreationOptions,
    NavigationBehaviorOptions {}

export abstract class Router {
  abstract config: Routes;
  abstract navigate(
    commands: any[],
    extras?: NavigationExtras
  ): Promise<boolean>;
}
