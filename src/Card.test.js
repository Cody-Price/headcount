import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Card from './Card';

describe('Card', () => {

  it ('Should match the snapshot', () => {
    const mockFn = jest.fn();
    const mockData = {
      location: 'ACADEMY 20', 
      selected: false, 
      stats: {
      2004: 0.302,
      2005: 0.267,
      2006: 0.354,
      2007: 0.392,
      2008: 0.385,
      2009: 0.39,
      2010: 0.436,
      2011: 0.489,
      2012: 0.479,
      2013: 0.488,
      2014: 0.49}}
    const wrapper = shallow(<Card district={mockData} key={1} displaySelected={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  })
})