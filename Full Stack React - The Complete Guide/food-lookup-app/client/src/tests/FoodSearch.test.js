import { shallow } from 'enzyme';
import React from 'react';
import FoodSearch from "../FoodSearch";

describe('FoodSearch', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FoodSearch/>);
    });

    it ('should not display the remove icon', () => {
        expect(
            wrapper.find('.remove.icon').length
        ).toBe(0);
    });

    it ('should display zero rows', () => {
       expect(
           wrapper.find('tbody tr').length
       ) .toBe(0);
    });

    describe('user populates search field', () => {
        beforeEach(() => { // simulate user typing 'brocc' in input

        });

        describe('and API returns results', () => {
            beforeEach(() => { // simulate API returning

            });

            describe('then user clicks food item', () => {
                beforeEach(() => { // simulate user clicking food item

                });

                describe('then user types more', () => {
                    beforeEach(() => { // simulate user typing x

                    });

                    describe('and API returns no results', () => {
                        beforeEach(() => { // simulate API return no results

                        });
                    });
                });
            });
        });
    });
});