import React, { Component } from 'react';

class ProductItemEXC extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div className="card text-center">
        <img className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh}
          style={{ width: 300, height: 300 }} />
        <div className="card-body text-center">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <p className="card-text text-center">{sanPhamProps.giaBan.toLocaleString()}</p>
          <button className="btn btn-success" onClick={() => { this.props.themGioHang(sanPhamProps) }}>Thêm giỏ hàng</button>
        </div>
      </div>

    );
  }
}

export default ProductItemEXC;