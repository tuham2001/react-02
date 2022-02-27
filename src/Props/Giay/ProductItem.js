import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { dataProductItem } = this.props;
    return (
      <div className="card text-left" style={{ width: 250 }}>
        <img className="card-img-top" src={this.props.dataProductItem.image} alt={this.props.dataProductItem.image} />
        <div className="card-body">
          <h4 className="card-title">{this.props.dataProductItem.name}</h4>
          <p className="card-text">{this.props.dataProductItem.price}</p>
          <button onClick={() => { this.props.xemChiTiet(dataProductItem) }} className="text-white w3-button w3-black" data-toggle="modal" data-target="#modelId">View detail</button>
        </div>
      </div>
    )
  }
}
