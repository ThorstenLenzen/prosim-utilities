/**
 * Class declaring extension methods for string handling
 */
export class StringExtensions {
    /**
     * Lowers the first case of a string
     * @param {string} argument which first case should be lowered
     * @returns the argument with a starting lower case
     */
    public static firstToLowerCase( argument: string ): string {
        return `${ argument.substr( 0, 1 ).toLowerCase() }${ argument.substr( 1 ) }`;
    }
}
