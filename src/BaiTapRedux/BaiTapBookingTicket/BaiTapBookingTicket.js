import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import danhSachGheData from '../../Data/danhSachGhe.json'
import ThongTinDatGhe from './ThongTinDatGhe';
import HangGhe from './HangGhe';

class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index} />
      </div>
    })
  }
  render() {
    return (
      <div style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: "100%" }}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.7)", width: "100%", height: "100%" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM</div>
                <div className="text-light mt-3" style={{ fontSize: "25px" }}>Màn hình</div>
                <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapBookingTicket;