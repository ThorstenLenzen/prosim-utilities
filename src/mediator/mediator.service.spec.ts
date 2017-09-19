import { TestBed, inject } from '@angular/core/testing';

import { MediatorService } from './mediator.service';

interface Person {
  firstName: string;
  lastName: string;
}

describe('MediatorService', () => {
  const messageType = 'Toto';

  const message = <Person>{
    firstName: 'Thorsten',
    lastName: 'Lenzen'
  };

  const errorMessageAlreadyExists = 'MediatorService: Der angegebene messageType existiert bereits.';
  const errorMessageNotFound = 'MediatorService: Der angegebene messageType konnte nicht gefunden werden.';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediatorService]
    });
  });

  it('should create', inject([MediatorService], (service: MediatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should register and unregister message', inject([MediatorService], (service: MediatorService) => {
    service.registerMessage(messageType);
    service.unregisterMessage(messageType);
  }));

  it('should not register second message with same messageType', inject([MediatorService], (service: MediatorService) => {
    service.registerMessage(messageType);
    expect(() => { service.registerMessage(messageType); }).toThrowError(errorMessageAlreadyExists);
  }));

  it('should not unregister message when messageType not registered', inject([MediatorService], (service: MediatorService) => {
    expect(() => { service.unregisterMessage(messageType); }).toThrowError(errorMessageNotFound);
  }));

  it('should get message subscriber', inject([MediatorService], (service: MediatorService) => {
    service.registerMessage(messageType);

    const result = service.getMessageSubscriber(messageType);
    expect(result).toBeTruthy();
  }));

  it('should not not message subscriber when messageType not registered', inject([MediatorService], (service: MediatorService) => {
    expect(() => { service.getMessageSubscriber(messageType); }).toThrowError(errorMessageNotFound);
  }));

  it('should send message', inject([MediatorService], (service: MediatorService) => {
    service.registerMessage(messageType);

    service.getMessageSubscriber(messageType).subscribe((msg => {
      expect(msg).toEqual(message);
    }));

    service.sendMessage(messageType, message);
  }));

  it('should not send message when messageType not registered', inject([MediatorService], (service: MediatorService) => {
    expect(() => { service.sendMessage(messageType, message); }).toThrowError(errorMessageNotFound);
  }));
});
