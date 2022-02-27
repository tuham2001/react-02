import React, { PureComponent } from 'react';

class Profile extends PureComponent {
  render() {
    return (
      <div style={{ width: 250 }} className="card text-white bg-dark">
        <img style={{ width: 250, height: 300 }} className="card-img-top" src="https://image-us.24h.com.vn/upload/1-2022/images/2022-01-07/Hot-girl-Trung-Quoc-trieu-fan-0062q5xngy1gy4k4zf8usj31jp2294qp-1641547480-317-width1000height1333.jpg" alt='123' />
        <div className="card-body">
          <h3>Số lượng tim: <i className="fa fa-heart"></i> {this.props.Like}</h3>
          <h4 className="card-title">Họ tên: Lê Thị A</h4>
          <p className="card-text">Tuổi: 18</p>
        </div>
      </div>

    );
  }
}

export default Profile;