import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('Form', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>)
    });

    describe('the user populates the input', () => {
        const item = 'Vancouver';

        beforeEach(() => {
            const input = wrapper.find('input').first();
            input.simulate('change', {
                target: { value: item }
            })
        })
    })
});