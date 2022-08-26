export class AppStorage<T> {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get(key: keyof T) {
    return this.storage.getItem(String(key));
  }

  set(key: keyof T, value: string) {
    this.storage.setItem(String(key), value);
  }
}
