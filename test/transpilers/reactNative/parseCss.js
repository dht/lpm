import expect from 'expect'
import {parseCss} from '../../../src/transpilers/reactNative/parseCss';
import {before1, after1} from '../../mocks/reactNative/style';

describe('parse style React Native methods', function () {
    it('should parse simple style', function () {
        const result = parseCss(before1);
        expect(result).toEqual(after1)
    });

});
