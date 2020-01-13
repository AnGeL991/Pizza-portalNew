import React from 'react';
import {shallow} from 'enzyme';
import MainLayout from './MainLayout';

describe('Component MainLoyout',()=>{
  it('should render component without crashing',()=>{
    const component = shallow(<MainLayout/>);
    expect(component).toBeTruthy();
  });

});
