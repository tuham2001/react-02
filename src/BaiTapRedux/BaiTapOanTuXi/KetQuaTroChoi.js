import React, { Component } from 'react';

import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">Đã thắng: <span className="text-warning">{this.props.soBanThang}</span></div>
        <div className="display-4 text-success">Đã chơi:<span className="text-warning">{this.props.soBanChoi}</span></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
  }
}
export default connect(mapStateToProps)(KetQuaTroChoi);