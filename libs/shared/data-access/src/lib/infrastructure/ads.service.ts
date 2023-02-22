declare const twq: (...params: unknown[]) => void;

export class AdsService {
  events = {
    c4p: () =>
      twq('event', 'tw-od9na-od9nc', {
        /** event id */
        status: 'started',
      }),
    ticket: () => () => 'ticket',
  };

  dispatchEvent<K extends keyof AdsService['events']>(event: K) {
    return this.events[event].apply(this);
  }
}
