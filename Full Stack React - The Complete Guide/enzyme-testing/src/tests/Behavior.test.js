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
        });

        it ('should update the state property `item`', () => {
            expect(
                wrapper.state().item
            ).toEqual(item);
        });

        it ('should enable `button`', () => {
            const button = wrapper.find('button').first();
            expect(
                button.props().disabled
            ).toBe(false);
        });

        describe('and then clears the input', () => {
           beforeEach(() => {
               const input = wrapper.find('input').first();
               input.simulate('change', {
                   target: { value: '' }
               })
           });

           it ('should disable `button`', () => {
               const button = wrapper.find('button').first();
               expect(
                   button.props().disabled
               ).toBe(true);
           });

           it ('should clear `item` value in state', () => {
               expect(
                   wrapper.state().item
               ).toBe('');
           })
        });

        describe('and then submits the form', () => {
            beforeEach(()  => {
                const form = wrapper.find('form').first();
                form.simulate('submit', {
                    preventDefault: () => {}
                });
            });

            it ('should add the item to state', () => {
                expect(
                    wrapper.state().items
                ).toContain(item);
            })
        })
    })
});