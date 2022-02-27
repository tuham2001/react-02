import React, { Component } from 'react';
import Profile from './Profile';

class DemoPureComponent extends Component {

  state = {
    like: 0
  }

  likeImage = () => {
    let likeHienTai = this.state.like + 1
    this.setState({
      like: likeHienTai
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Profile Lê Thị A</h3>
        <Profile Like={this.state.like} />
        <br />
        <div className="card text-white bg-default">
          <h3 style={{ color: 'red' }}>Số lượt thả tim ({this.state.like})</h3>
          <div className="card-body">
            <button className="btn" style={{ color: 'red', border: '3px solid red' }} onClick={() => { this.likeImage() }}>Thả tim <i className="fa fa-heart"></i></button>
          </div>
        </div>
      </div>

    );
  }
}

export default DemoPureComponent;