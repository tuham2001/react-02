import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return (
        <div key={index} className="col-4 mt-3 w3-container w3-center w3-animate-zoom">
          <ProductItem xemChiTiet={this.props.xemChiTiet} dataProductItem={item} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        {this.renderProductItem()}
      </div>
    )
  }
}
