import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it ('Should match the snapshot', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<SearchBar search={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  })
})