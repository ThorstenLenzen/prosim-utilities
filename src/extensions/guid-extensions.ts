import { Guid } from '../guid';

/**
 * Extension class to provide static methods for Guid operations.
 *
 * @export
 * @class GuidExtension
 */
export class GuidExtensions {

  /**
   * Returns a new Guid. This is a convience method, which does not
   * create guaranted unique Guids. They are only likely to be unique.
   * So don't use them to create DB Guids or something similar.
   *
   * @static
   * @returns {Guid} The newly created Guid.
   * @memberof GuidExtension
   */
  public static newGuid(): Guid {
    let result: Guid;
    let i: string;
    let j: number;

    result = '';
    for (j = 0; j < 32; j++) {
      if (j === 8 || j === 12 || j === 16 || j === 20) {
          result = result + '-';
      }

      i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  /**
   * Returns empty Guid.
   *
   * @static
   * @returns {Guid}
   * @memberof GuidExtensions
   */
  public static emptyGuid(): Guid {
    return '00000000-0000-0000-0000-000000000000';
  }

  /**
   * Returns true if guid is an empty Guid
   *
   * @static
   * @param {Guid} guid
   * @returns {boolean}
   * @memberof GuidExtensions
   */
  public static isEmptyGuid(guid: Guid): boolean {
    if (guid === GuidExtensions.emptyGuid()) {
      return true;
    }

    return false;
  }
}
