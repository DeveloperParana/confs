export class OAuthStorage<T = unknown> {
  private storage: Storage;

  private static instance: OAuthStorage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  public static getInstance<T>(storage: Storage): OAuthStorage<T> {
    if (!OAuthStorage.instance) {
      OAuthStorage.instance = new OAuthStorage(storage);
    }

    return OAuthStorage.instance;
  }

  get<K extends keyof T>(key: K) {
    return this.storage.getItem(String(key));
  }

  set<K extends keyof T>(key: K, value: string) {
    this.storage.setItem(String(key), value);
  }
}

export const createOAuthStorage = <T>() => {
  return OAuthStorage.getInstance<T>(localStorage);
};
