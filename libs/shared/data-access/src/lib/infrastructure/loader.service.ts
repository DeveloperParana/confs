import { BehaviorSubject } from 'rxjs';

export class LoaderService {
  private _visible = new BehaviorSubject(false);
  public visible$ = this._visible.asObservable();

  set(state: boolean) {
    this._visible.next(state);
  }

  show() {
    this._visible.next(true);
  }

  hide() {
    this._visible.next(false);
  }
}
