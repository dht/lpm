import expect from 'expect'
import reduxThunk from 'redux-thunk'
import logger from './helpers/logger'
import configureStore from 'redux-mock-store'
import clean from './mocks/clean';
const middlewares = [reduxThunk, logger];
const mockStore = configureStore(middlewares)


describe('elements thunks', function () {
    it('should return {} for undefined', function () {
        const store = mockStore(clean);

    })

})


