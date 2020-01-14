import React from 'react';
import {shallow } from 'enzyme';
import Button from './Button';

describe('Component Button',()=>{
  it('should render component without crashing',()=>{
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render styles',()=>{
    //const component = shallow(<Button />);
    //expect(component.exists('component')).toEqual(true);
    //expect(component.exists('.title')).toEqual(true);
  });
});
