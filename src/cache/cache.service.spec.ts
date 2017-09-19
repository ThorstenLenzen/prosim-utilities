import { TestBed, inject } from '@angular/core/testing';

import { CacheService } from './cache.service';

interface Person {
  firstName: string;
  lastName: string;
}

describe('CacheService', () => {
  const key = 'Toto';

  const person = <Person>{
    firstName: 'Thorsten',
    lastName: 'Lenzen'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService]
    });
  });

  it('should create', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));

  it('should insert object into cache', inject([CacheService], (service: CacheService) => {
    service.setItem(key, person);

    const result = <Person>JSON.parse(localStorage.getItem(key));
    expect(result).toEqual(person);
  }));

  it('should retrieve object from cache', inject([CacheService], (service: CacheService) => {
    localStorage.setItem(key, JSON.stringify(person));

    const result = service.getItem(key);
    expect(result).toEqual(person);
  }));

  it('should remove object from cache', inject([CacheService], (service: CacheService) => {
    localStorage.setItem(key, JSON.stringify(person));

    service.removeItem(key);

    const result = <Person>JSON.parse(localStorage.getItem(key));
    expect(result).toBeFalsy();
  }));
});
