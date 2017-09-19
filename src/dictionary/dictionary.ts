/**
 * Typescript implementation for Dictionary.
 *
 * @export
 * @class Dictionary
 * @template T
 */
export class Dictionary<T> {
  /**
   * Items
   *
   * @private
   * @type {{ [index: string]: T }}
   * @memberof Dictionary
   */
  private items: { [index: string]: T } = {};

  /**
   * Current size of items.
   *
   * @private
   * @type {number}
   * @memberof Dictionary
   */
  private count: number = 0;

  /**
   * Check for existence of given key.
   *
   * @param {string} key
   * @returns {boolean}
   * @memberof Dictionary
   */
  public ContainsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  /**
   * Returns current dictionary size.
   *
   * @returns {number}
   * @memberof Dictionary
   */
  public Count(): number {
    return this.count;
  }

  /**
   * Adds new item.
   *
   * @param {string} key
   * @param {T} value
   * @memberof Dictionary
   */
  public Add(key: string, value: T): void {
    this.items[key] = value;
    this.count++;
  }

  /**
   * Remove item with key.
   *
   * @param {string} key
   * @returns {T}
   * @memberof Dictionary
   */
  public Remove(key: string): T {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  /**
   * Remove all items.
   *
   * @memberof Dictionary
   */
  public RemoveAll(): void {
    delete this.items;
    this.items = {};
  }

  /**
   * Returns item with given key.
   *
   * @param {string} key
   * @returns {T}
   * @memberof Dictionary
   */
  public Item(key: string): T {
    return this.items[key];
  }

  /**
   * Returns array of all keys.
   *
   * @returns {string[]}
   * @memberof Dictionary
   */
  public Keys(): string[] {
    const keySet: string[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }

    return keySet;
  }

  /**
   * Returns array of all values.
   *
   * @returns {T[]}
   * @memberof Dictionary
   */
  public Values(): T[] {
    const values: T[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }
}
