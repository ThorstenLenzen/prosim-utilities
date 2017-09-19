import {ValidationExtensions} from './validation-extensions';

describe('ValidationExtensions', () => {

    const argument: object = undefined;
    const argument_defined: object = new Object();
    const argumentName: string = '';

    it('should throw an error if argument or argumentname is undefined', () => {
         expect(() => {
             ValidationExtensions.isNotNull(argument, 'test-argument');
        }).toThrowError(`The argument test-argument is undefined.`);
    });

    it('should not throw an error if argument or argumentname is defined', () => {
         expect(() => {
             ValidationExtensions.isNotNull(argument_defined, 'test-argument');
        }).not.toThrowError(`The argument test-argument is undefined.`);
    });

});
