import expect from 'expect'
import {urlFromBackgroundUrl} from '../../../src/transpilers/reactNative/utils';

describe('utils React Native', function () {
    it('should return valid naked backgroundUrl string', function () {

        const result  = urlFromBackgroundUrl(`http://lorempixel.com/300/300`);
        expect(result).toEqual('http://lorempixel.com/300/300');
    });

    it('should return empty for invalid naked backgroundUrl string', function () {

        const result  = urlFromBackgroundUrl(`http://lorempixel/300/300`);
        expect(result).toEqual('');
    });

    it('should extract background url from backgroundUrl string', function () {

        const result  = urlFromBackgroundUrl(`url(http://lorempixel.com/300/300)`);
        expect(result).toEqual('http://lorempixel.com/300/300');
    });

    it('should extract background url from backgroundUrl string with single quotes', function () {

        const result  = urlFromBackgroundUrl(`url('http://lorempixel.com/300/300')`);
        expect(result).toEqual('http://lorempixel.com/300/300');
    });

    it('should extract background url from backgroundUrl string with double quotes', function () {

        const result  = urlFromBackgroundUrl(`url("http://lorempixel.com/300/300")`);
        expect(result).toEqual('http://lorempixel.com/300/300');
    });
});
