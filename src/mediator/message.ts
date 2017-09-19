import { Subject } from 'rxjs/Subject';

/**
 * Represents a message topic identified by MessageType.
 *
 * @export
 * @interface MessageListItem
 */
export interface MessageListItem {
  messageType: string;
  subject: Subject<any>;
}
