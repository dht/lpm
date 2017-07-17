process.env.NODE_ENV = 'test'

/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import StylePanel from '../src/StylePanel/StylePanel';

describe('<MovableCanvas />', () => {
    describe('state', () => {
        const wrapper = shallow(
            <StylePanel
                styleId={ 1 }
                elementStyle={{color:'#f928f9', fontSize:'16px'}}
            />
        );

        it('renders with initial state properly', () => {
            assert.strictEqual(wrapper.state('styleId'), 1);
        });
    });
});