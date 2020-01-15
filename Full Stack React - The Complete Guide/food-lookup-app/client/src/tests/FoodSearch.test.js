import { shallow } from 'enzyme';
import React from 'react';
import FoodSearch from "../FoodSearch";
import Client from '../Client';

jest.mock('../Client');

describe('FoodSearch', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FoodSearch/>);
    });

    afterEach(() => {
        Client.search.mockClear();
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
        const value = 'brocc';

        beforeEach(() => { // simulate user typing 'brocc' in input
            const input = wrapper.find('input').first();
            input.simulate('change', {
                target: { value: value }
            });
        });

        it('should update state property `searchValue`', () => {
            expect(
                wrapper.state().searchValue
            ).toEqual(value);
        });

        it ('should display the remove icon', () => {
            expect(
                wrapper.find('.remove.icon').length
            ).toBe(1);
        });

        it ('should call `Client.search() with `value`', () => {
            const invocationArgs = Client.search.mock.calls[0];
            expect(
                invocationArgs[0]
            ).toEqual(value);
        });

        describe('and API returns results', () => {
            const foods = [
                {
                    description: 'Broccolini',
                    kcal: '100',
                    protein_g: '11',
                    fat_g: '21',
                    carbohydrate_g: '31'
                },
                {
                    description: 'Broccoli rabe',
                    kcal: '200',
                    protein_g: '12',
                    fat_g: '22',
                    carbohydrate_g: '32'
                }
            ];

            beforeEach(() => { // simulate API returning
                const invocationArgs = Client.search.mock.calls[0];
                const cb = invocationArgs[1];
                cb(foods);
                wrapper.update();
            });

            it ('should set the state property `food`', () => {
                expect(
                    wrapper.state().foods
                ).toEqual(foods);
            });

            it ('should display two rows', () => {
               expect(
                   wrapper.find('tbody tr').length
               ) .toEqual(2);
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