import React, { Component } from 'react';
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';

class ExerciseCart extends Component {

  state = {
    gioHang: []
  }

  themGioHang = (sanPham) => {
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    }
    let gioHang = this.state.gioHang
    let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP)
    if (index !== -1) {
      // Tìm thấy sản phẩm chưa trong giỏ hàng => Tăng số lượng
      gioHang[index].soLuong += 1
    } else {
      this.state.gioHang.push(spGioHang)
    }
    //push vào state.gioHang
    // let gioHangCapNhat = [...this.state.gioHang]
    this.setState({
      gioHang: [...this.state.gioHang]
    })
  }

  xoaGioHang = (maSP) => {
    let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP)
    if (index !== -1) {
      this.state.gioHang.splice(index, 1)
    }

    this.setState({
      gioHang: this.state.gioHang
    })
  }

  tinhTongSoLuong = () => {
    // Dùng for
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i]
    //   tongSoLuong += spGioHang.soLuong
    // }
    // return tongSoLuong

    // Reduce 
    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
      return tongSoLuong += spGioHang.soLuong
    }, 0)
  }

  tangGiamSoLuong = (maSP, number) => {
    let gioHang = [...this.state.gioHang]
    let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP)
    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert('Số lượng sản phẩm đã tối thiểu')
        return;
      }
      gioHang[index].soLuong += number
    }

    this.setState({
      gioHang: gioHang
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div className="text-right">
          <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i>({this.tinhTongSoLuong()})Giỏ hàng</i>
          </span>
        </div>
        <CartModal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    );
  }
}

export default ExerciseCart;