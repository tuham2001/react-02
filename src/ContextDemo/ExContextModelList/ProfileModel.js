import React, { Component } from 'react';
import { ExModelListContext } from '../_Context/ExModelListContext';

class ProfileModel extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          let activeModel = value.modelListState.find(model => model.active === true)
          return <div>
            <h3>Thông tin Idol</h3>
            <div className="card text-left" style={{ width: 300 }}>
              <img className="card-img-top" src={activeModel.img} alt="abc" />
              <div className="card-body">
                <h4 className="card-title">Họ tên: {activeModel.name}</h4>
                <p className="card-text">Tuổi: {activeModel.age}</p>
                <p className="card-text">Lượt thích: {activeModel.like} <i style={{ color: 'red' }} className="fa fa-heart"></i></p>
              </div>
            </div>
          </div>
        }}
      </ExModelListContext.Consumer>
    );
  }
}

export default ProfileModel;