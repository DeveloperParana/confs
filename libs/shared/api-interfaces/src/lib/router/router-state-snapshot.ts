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
  url: string;
  toString(): string;
}
