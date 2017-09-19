import { Injectable } from '@angular/core';

/**
 * Provides session caching using sessionStorage.
 */
@Injectable()
export class SessionService {

  /**
   * Initializes an insctnece of SessionService.
   */
  constructor() {
     if (typeof(Storage) === 'undefined') {
      throw new Error('LocalStorage is not supported on this browser.');
    }
  }

/**
   * Adds an item to the session cache.
   * @param key The key of the chached item.
   * @param value The value of the chached item.
   */
  public setItem(key: string, value: any): void {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
  }

  /**
   * Gets an item from the session cache.
   * @param key The key of the chached item.
   */
  public getItem<TValue>(key: string): TValue {
    const data = sessionStorage.getItem(key);
    return <TValue>JSON.parse(data);
  }

  /**
   * Removes an item from the cache.
   * @param key The key of the chached item.
   */
  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
