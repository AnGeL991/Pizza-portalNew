import React from 'react';
import {shallow} from 'enzyme';
import SeeWaiter from './SeeWaiter';

describe('Component SeeWaiter',()=>{
  it('should render component seeWaiter',()=>{
    const component = shallow(<SeeWaiter/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render div and h3',()=>{
    const component = shallow(<SeeWaiter/>);
    expect(component.exists('.component')).toEqual(true);
  });
});
