import { Injectable } from '@angular/core';
import { MessageListItem } from './message';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/**
 * Mediator for message communication between components.
 *
 * It contains a list of MessageListItems which represents certain topic defined by MessageType.
 * MessageListItems can be registered or unregistered at any time to MediatorService.
 * Interested parties can subscribe to a subject to recieve message or send messages to certain topics.
 *
 * @export
 * @class MediatorService
 */
@Injectable()
export class MediatorService {

  /**
   * Error string
   *
   * @private
   * @type {string}
   * @memberof MediatorService
   */
  private errorMessageAlreadyExists: string = 'MediatorService: Der angegebene messageType existiert bereits.';
  /**
   * Error string
   *
   * @private
   * @type {string}
   * @memberof MediatorService
   */
  private errorMessageNotFound: string = 'MediatorService: Der angegebene messageType konnte nicht gefunden werden.';

  /**
   * Array of MessageListItems
   *
   * @private
   * @type {MessageListItem[]}
   * @memberof MediatorService
   */
  private messageListItems: MessageListItem[];

  constructor() {
    this.messageListItems = new Array();
  }

  /**
   * Registers new MessageType if not already exist.
   *
   * @param {string} messageType
   * @memberof MediatorService
   */
  public registerMessage(messageType: string): void {
    if (this.messageTypeExists(messageType)) {
      throw new Error(this.errorMessageAlreadyExists);
    }

    this.messageListItems.push(<MessageListItem>{
      messageType: messageType,
      subject: new Subject<any>()
    });
  }

  /**
   * Unregister messageType if exist.
   *
   * @param {string} messageType
   * @memberof MediatorService
   */
  public unregisterMessage(messageType: string): void {
    if (!this.messageTypeExists(messageType)) {
      throw new Error(this.errorMessageNotFound);
    }

    this.messageListItems.forEach((item, index, list) => {
      if (item.messageType === messageType) {
        list.splice(index, 1); // Element removen
      }
    });
  }

  /**
   * Broadcast message to subscribers.
   *
   * @param {string} messageType
   * @param {*} message
   * @memberof MediatorService
   */
  public sendMessage(messageType: string, message: any): void {
    const subject = this.retrieveMessage(messageType);
    subject.next(message);
  }

  /**
   * Retrieve Subject of given messageType as Observable.
   *
   * @param {string} messageType
   * @returns {Observable<any>}
   * @memberof MediatorService
   */
  public getMessageSubscriber(messageType: string): Observable<any> {
    const subject = this.retrieveMessage(messageType);
    return subject as Observable<any>;
  }

  /**
   * Returns true if given messageType exists.
   *
   * @private
   * @param {string} messageType
   * @returns {boolean}
   * @memberof MediatorService
   */
  private messageTypeExists(messageType: string): boolean {
    let result = false;

    this.messageListItems.forEach(item => {
      if (item.messageType === messageType) {
        result = true;
      }
    });

    return result;
  }

  /**
   * Retrieve subject of given messageType if exist.
   *
   * @private
   * @param {string} messageType
   * @returns {Subject<any>}
   * @memberof MediatorService
   */
  private retrieveMessage(messageType: string): Subject<any> {
    if (!this.messageTypeExists(messageType)) {
      throw new Error(this.errorMessageNotFound);
    }

    let message: Subject<any> = null;
    this.messageListItems.forEach(item => {
      if (item.messageType === messageType) {
        message = item.subject;
      }
    });

    if (message === null) {
      throw new Error(this.errorMessageNotFound);
    }

    return message;
  }
}
