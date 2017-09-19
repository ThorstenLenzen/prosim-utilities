import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';

interface Person {
  firstName: string;
  lastName: string;
}

describe('SessionService', () => {
  const key = 'Toto';

  const person = <Person>{
    firstName: 'Thorsten',
    lastName: 'Lenzen'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
  });

  it('should create', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));

  it('should insert object into session', inject([SessionService], (service: SessionService) => {
    service.setItem(key, person);

    const result = <Person>JSON.parse(sessionStorage.getItem(key));
    expect(result).toEqual(person);
  }));

  it('should retrieve object from session', inject([SessionService], (service: SessionService) => {
    sessionStorage.setItem(key, JSON.stringify(person));

    const result = service.getItem(key);
    expect(result).toEqual(person);
  }));

  it('should remove object from session', inject([SessionService], (service: SessionService) => {
    sessionStorage.setItem(key, JSON.stringify(person));

    service.removeItem(key);

    const result = <Person>JSON.parse(sessionStorage.getItem(key));
    expect(result).toBeFalsy();
  }));
});
