import { Injectable } from '@angular/core';

import { SessionService} from '../session/session.service';
import { Guid } from '../guid';
import { GuidExtensions } from './../extensions/guid-extensions';

/**
 * Transfer service provides a cache for complex objects which sould be tranfered
 * between routing. It creates Guid for the object and stores it as key value pair in the session.
 *
 * @export
 * @class TransferService
 */
@Injectable()
export class TransferService {

  constructor(private sessionService: SessionService) { }

  /**
   * Stores object in the session with generated Guid.
   *
   * @param {*} value
   * @returns {Guid}
   * @memberof TransferService
   */
  public push(value: any): Guid {
    const guid = GuidExtensions.newGuid();
    this.sessionService.setItem(guid, value);
    return guid;
  }

  /**
   * Returns object with given key from the session.
   *
   * @template T
   * @param {Guid} guid
   * @returns {T}
   * @memberof TransferService
   */
  public peek<T>(guid: Guid): T {
    return this.sessionService.getItem<T>(guid);
  }

  /**
   * Consumes object from the session (deletes object afterwards).
   *
   * @template T
   * @param {Guid} guid
   * @returns {T}
   * @memberof TransferService
   */
  public pop<T>(guid: Guid): T {
    const item = this.sessionService.getItem<T>(guid);
    this.sessionService.removeItem(guid);
    return item;
  }

}
