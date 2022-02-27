import React, { Component } from 'react';
import ExModelListProvider from '../_Provider/ExModelListProvider';
import ModelList from './ModelList';
import ProfileModel from './ProfileModel';

class ExContextModelList extends Component {
  render() {
    return (
      <ExModelListProvider>
        <div className="container">
          <ProfileModel />
          <ModelList />
        </div>
      </ExModelListProvider>
    );
  }
}

export default ExContextModelList;