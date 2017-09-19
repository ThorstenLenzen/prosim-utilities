/**
 * Class declaring extension methods for enum handling
 */
export class EnumExtensions {
  /**
   * Gets the value of the enum value
   * @param {any} enumType
   * @param {number} enumValue
   * @returns the enum value as string
   */
  public static getValueFromEnum( enumType: any, enumValue: number ): string {
    return EnumExtensions.toString( enumType, enumValue );
  }

  /**
   * Gets  the string representation of the given enum
   * @param {any} enumType
   * @param {number} enumValue
   * @returns the string representation of the given enum value
   */
  public static toString( enumType: any, enumValue: number ): string {
    return ( enumType[ enumValue ] ).toString();
  }
}
