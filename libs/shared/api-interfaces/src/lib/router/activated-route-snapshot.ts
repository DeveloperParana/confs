import {ParamMap} from './param-map';
import {Params} from './params';
import {Data} from './data';

export declare class ActivatedRouteSnapshot {
  url: string[];
  params: Params;
  queryParams: Params;
  fragment: string | null;
  data: Data;
  outlet: string;
  get title(): string | undefined;
  get root(): ActivatedRouteSnapshot;
  get parent(): ActivatedRouteSnapshot | null;
  get firstChild(): ActivatedRouteSnapshot | null;
  get children(): ActivatedRouteSnapshot[];
  get pathFromRoot(): ActivatedRouteSnapshot[];
  get paramMap(): ParamMap;
  get queryParamMap(): ParamMap;
  toString(): string;
}
