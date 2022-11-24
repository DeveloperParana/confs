export interface ParamMap {
  has(name: string): boolean;
  get(name: string): string | null;
  getAll(name: string): string[];
  /** Names of the parameters in the map. */
  readonly keys: string[];
}
