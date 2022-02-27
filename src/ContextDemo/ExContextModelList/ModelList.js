import React, { Component } from 'react';
import { ExModelListContext } from '../_Context/ExModelListContext';
import ModelItem from './ModelItem';

class ModelList extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return <div>
            <h3>Danh sách Idol</h3>
            <div className="row">
              {value.modelListState.map((model, index) => {
                return <div className="col-3" key={index}>
                  <ModelItem modelItem={model} />
                </div>
              })}
            </div>
          </div>
        }}
      </ExModelListContext.Consumer>
    );
  }
}

export default ModelList;