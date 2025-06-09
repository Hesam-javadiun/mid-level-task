class Storage<T> {
  constructor(
    public readonly identifier: string,
    public readonly storage: "localStorage"
  ) {}

  public set(value: Partial<T> | null = null) {
    window[this.storage].setItem(this.identifier, JSON.stringify(value));
  }

  public get() {
    return JSON.parse(window[this.storage].getItem(this.identifier) || '{}');
  }
}

export default Storage;
