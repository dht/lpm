import expect from 'expect'
import {parseCss} from '../../../src/transpilers/web/parseCss';
import {before1, after1} from '../../mocks/web/style';

describe('parse style Web methods', function () {
    it('should parse simple style', function () {
        const result = parseCss(before1);
        expect(result).toEqual(after1)
    });

});
