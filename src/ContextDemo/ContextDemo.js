import React, { Component } from 'react';
import LikeProfile from './LikeProfile';
import ModelProfile from './ModelProfile';
import ModelStateProvider from './_Provider/ModelStateProvider';

class ContextDemo extends Component {
  render() {
    return (
      <ModelStateProvider>
        <div className="container">
          <ModelProfile />
          <LikeProfile />
        </div>
      </ModelStateProvider>
    );
  }
}

export default ContextDemo;