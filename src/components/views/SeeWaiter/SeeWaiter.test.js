import React from 'react';
import {shallow} from 'enzyme';
import Paper from '@material-ui/core/Paper';

describe('Component SeeWaiter',()=> {


  it('should render component paper', ()=> {
    const component =shallow(<Paper/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
});
