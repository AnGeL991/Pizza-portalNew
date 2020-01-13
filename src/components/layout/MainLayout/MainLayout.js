import React from 'react';
import PropTypes from'prop-types';


class MainLayout extends React.Component{

  mockProps ={
    children:'children',
  }

  render(){
    return (
      <div>
        {this.mockProps.children}
      </div>
    );
  }
}
MainLayout.propTypes = {
  children:PropTypes.string,
};






export default MainLayout;
