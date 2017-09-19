import { Injectable } from '@angular/core';

/**
 * Provides caching using localStorage.
 */
@Injectable()
export class CacheService {

  /**
   * Initializes an insctnece of CacheService.
   */
  constructor() {
    if (typeof(Storage) === 'undefined') {
      throw new Error('LocalStorage is not supported on this browser.');
    }
  }

  /**
   * Adds an item to the cache.
   * @param key The key of the chached item.
   * @param value The value of the chached item.
   */
  public setItem(key: string, value: any): void {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  /**
   * Gets an item from the cache.
   * @param key The key of the chached item.
   */
  public getItem<TValue>(key: string): TValue {
    const data = localStorage.getItem(key);
    return <TValue>JSON.parse(data);
  }

  /**
   * Removes an item from the cache.
   * @param key The key of the chached item.
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
