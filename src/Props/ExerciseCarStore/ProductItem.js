import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    console.log(this.props)
    let { item } = this.props;
    return (
      <div className="card text-left ">
        <img className="card-img-top" src={item.img} alt='' />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          <button onClick={() => { this.props.xemChiTiet(item) }} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
        </div>
      </div>

    );
  }
}

export default ProductItem;