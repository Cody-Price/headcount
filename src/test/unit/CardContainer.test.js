import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import incomingData from './data/kindergartners_in_full_day_program.js'

describe('CardContainer', () => {
  it ('Should match the snapshot', () => {
    const mockFn = jest.fn()
    const passedData = new DistrictRepository(incomingData).stats;
    const wrapper = shallow(<CardContainer data={passedData} displaySelected={mockFn} />)
  })
})

