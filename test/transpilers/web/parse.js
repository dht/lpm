import expect from 'expect'
import {parse} from '../../../src/transpilers/web/parse';
import * as mock from '../../mocks/state';
import {stateBefore1, stateAfter1} from '../../mocks/all';

describe('parse', function () {
    it('should parse simple structure', function () {

        const result  = parse(mock.before1, 1);
        expect(result).toEqual(mock.after1)
    });


    it('should parse structure with one child', function () {

        const result  = parse(mock.before2, 1);
        expect(result).toEqual(mock.after2)
    });

    it('should parse structure with two children', function () {

        const result  = parse(mock.before3, 1);
        expect(result).toEqual(mock.after3)
    });


    it('should return an empty object if element does not exist', function () {

        const result  = parse(mock.before4, 5);
        expect(result).toEqual({html: '', css: {r1:'', r2:'', r3:'', r4:''}})
    });


    it('should parse text', function () {

        const result  = parse(mock.before4, 1);
        expect(result).toEqual(mock.after4)
    });

    it('should parse image', function () {

        const result  = parse(mock.before5, 1);
        expect(result).toEqual(mock.after5)
    });

    it('should parse a complex structure', function () {

        const result  = parse(stateBefore1, [1]);
        expect(result).toEqual(stateAfter1)
    });

});
