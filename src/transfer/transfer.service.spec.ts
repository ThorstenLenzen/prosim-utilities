import { TestBed, inject } from '@angular/core/testing';

import { TransferService } from './transfer.service';
import { SessionService } from '../session/session.service';
import { GuidExtensions } from '../extensions/guid-extensions';

interface Person {
  firstName: string;
  lastName: string;
}

describe('TransferService', () => {
  let sessionService: SessionService;

  const payload = <Person>{
    firstName: 'Thorsten',
    lastName: 'Lenzen'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SessionService,
        TransferService
      ]
    });

    sessionService = TestBed.get(SessionService) as SessionService;
  });

  it('should instantiate.', inject([TransferService], (service: TransferService) => {
    expect(service).toBeTruthy();
  }));

  it('should push an item.', inject([TransferService], (service: TransferService) => {
    const guid = service.push(payload);

    const result = sessionService.getItem<Person>(guid);
    expect(result.firstName).toBe(payload.firstName);
  }));

  it('should peek an item.', inject([TransferService], (service: TransferService) => {
    const guid = GuidExtensions.newGuid();
    sessionService.setItem(guid, payload);

    const result = service.peek<Person>(guid);

    expect(result.firstName).toBe(payload.firstName);

    const stillThere = sessionService.getItem<Person>(guid);
    expect(stillThere).toBeTruthy();
  }));

  it('should pop an item.', inject([TransferService], (service: TransferService) => {
    const guid = GuidExtensions.newGuid();
    sessionService.setItem(guid, payload);

    const result = service.pop<Person>(guid);

    expect(result.firstName).toBe(payload.firstName);

    const stillThere = sessionService.getItem<Person>(guid);
    expect(stillThere).toBeFalsy();
  }));
});
