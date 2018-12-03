import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from './App';

describe('App',  () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
    }
  )

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('search', () => {

    it('displaySearch updates data in state', () => {
      const initialState = {data: {
        'ACADEMY 20': {
        location: "ACADEMY 20",
        selected: false,
        stats:
        {2012: 0.479,
        2013: 0.488,
        2014: 0.49}
        }
      }, 
        'ADAMS COUNTY 14': {
        location: "ADAMS COUNTY 14",
        selected: false,
        stats:
        {2012: 0.479,
        2013: 0.488,
        2014: 0.49}
        }, 
        'COLORADO': {
          location: "COLORADO",
          selected: false,
          stats:
          {2012: 0.479,
          2013: 0.488,
          2014: 0.49}
          }
      }
    
        
      const expected = {'ADAMS COUNTY 14': {
        location: "ADAMS COUNTY 14",
        selected: false,
        stats:
        {2004: 0.228,
        2005: 0.3,
        2006: 0.293,
        2007: 0.306,
        2008: 0.673,
        2009: 1,
        2010: 1,
        2011: 1,
        2012: 1,
        2013: 0.998,
        2014: 1}
        }
      }
  
      wrapper.setState({ data: initialState })
      wrapper.instance().search('ADAMS COUNTY 14')
  
      expect(wrapper.state('data')).toEqual(expected)
    });
  })
})
