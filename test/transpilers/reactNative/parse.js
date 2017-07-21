import expect from 'expect'
import {parse, format, stylesheet, dependencies} from '../../../src/transpilers/reactNative/parse';
import * as mock from '../../mocks/reactNative/state';
import {stateBefore1, stateAfter1, formatAfter1} from '../../mocks/reactNative/all';

describe('parse React Native', function () {
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

    it('should switch children according to order', function () {

        const result  = parse(mock.before3a, 1);
        expect(result).toEqual(mock.after3a)
    });

    it('should return an empty object if element does not exist', function () {

        const result  = parse(mock.before4, 5);
        expect(result).toEqual({jsx: '', style:''})
    });


    it('should parse text', function () {

        const result  = parse(mock.before4, 1);
        expect(result).toEqual(mock.after4)
    });

    it('should parse image', function () {

        const result  = parse(mock.before5, 1);
        expect(result).toEqual(mock.after5)
    });

    it('should parse image from backgroundImage', function () {

        const result  = parse(mock.before6, 1);
        expect(result).toEqual(mock.after6)
    });

    it('should parse image with data\'s content over backgroundImage', function () {

        const result  = parse(mock.before7, 1);
        expect(result).toEqual(mock.after7)
    });

    it('should parse image with backgroundSize', function () {

        const result  = parse(mock.before8, 1);
        expect(result).toEqual(mock.after8)
    });

    it('should parse image with invalid backgroundSize', function () {

        const result  = parse(mock.before9, 1);
        expect(result).toEqual(mock.after9)
    });

    it('should parse a complex structure', function () {

        const result  = parse(stateBefore1, 1);
        expect(result).toEqual(stateAfter1)
    });

    it('should format complex structure', function () {

        const result  = format(stateBefore1, 1);
        expect(result).toEqual(formatAfter1)
    });

});
