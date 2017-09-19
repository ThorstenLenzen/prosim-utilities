import {EnumExtensions} from './enum-extensions';

describe('EnumExtensions', () => {

    enum TestEnum { Import }

    it('toString Method should return value as string', () => {
        expect(EnumExtensions.toString(TestEnum,
                TestEnum.Import)).toBe('Import');
    });

    it('getValueFromEnum Method should return value as string', () => {
         expect(EnumExtensions.getValueFromEnum(TestEnum,
                TestEnum.Import)).toBe('Import');
    });
});
