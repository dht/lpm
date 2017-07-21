import expect from 'expect'
import {parse} from '../src/transpilers/web/parse';
import * as mock from './mocks/web/state';


// a place to run tests before adding the to the main suite
// run with "npm run test:play"

describe('playground', function () {
    it('should parse simple structure', function () {

        const result  = parse(mock.before1, 1);
        expect(result).toEqual(mock.after1)
    });
});
