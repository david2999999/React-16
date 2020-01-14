import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it ('should have the `th` "Items"', () => {
    const wrapper = shallow(
        <App/>
    );

    expect(
        wrapper.contains(<th>Items</th>)
    ).toBe(true);
  })
});