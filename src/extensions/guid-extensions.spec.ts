import {GuidExtensions} from './guid-extensions';

describe('GuidExtensions', () => {
    it('should create new Guid', () => {
        const result = GuidExtensions.newGuid();
        expect(result).toBeTruthy();
    });
});
