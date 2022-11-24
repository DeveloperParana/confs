import { ActivatedRouteSnapshot } from './activated-route-snapshot';

declare class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
  constructor(value: T, children: TreeNode<T>[]);
  toString(): string;
}

declare class Tree<T> {
  constructor(root: TreeNode<T>);
  get root(): T;
}

export declare class RouterStateSnapshot extends Tree<ActivatedRouteSnapshot> {
  /** The url from which this snapshot was created */
  url: string;
  toString(): string;
}
