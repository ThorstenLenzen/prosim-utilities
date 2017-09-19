/**
 * Class declaring extensions methods for validation
 * @param {any} argument?
 * @param {string} argumentName?
 */
export class ValidationExtensions {
  /**
   * Checks if a given argument is NOT null or undefined, otherwise it throws an exception
   * @param {any} argument?
   * @param {string} argumentName?
   */
  public static isNotNull(argument: any, argumentName: string ): void {
    if ( !argument || argument === undefined ) {
      throw new Error(`The argument ${ argumentName !== '' ? argumentName + ' ' : '' } is undefined.`);
    }
  }
}
