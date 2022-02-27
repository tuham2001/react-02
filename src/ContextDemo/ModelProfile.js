import React, { Component } from 'react';
import { ModelContext } from './_Context/ModelContext';

class ModelProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return <div className="mt-5">
            <h3>Profile</h3>
            <div className="card text-white bg-dark" style={{ width: 300 }}>

              <img className="card-img-top" src="https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2019/2/26/1920/ke-ni-nang-hotgirl-lanh-lung-khong-bao-gio-nhoen-mieng-cuoi-anh-2_957_651_82.jpg" alt='abc' />
              <div className="card-body">
                <h4 className="card-title">Tên:Lê Thị A</h4>
                <p className="card-text">Tuổi:18</p>
                <span style={{ color: 'pink' }}> {value.stateLike} <i className="fa fa-heart"></i></span>
              </div>
            </div>
          </div>
        }}
      </ModelContext.Consumer>
    );
  }
}

export default ModelProfile;