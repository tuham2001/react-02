import React, { Component } from 'react';
import ProductList from './ProductList'
import Modal from './Modal'
import dataJson from '../../Data/data.json'
class Giay extends Component {
  state = {
    productDetail: {
      "id": 2,
      "name": "Adidas Prophere Black White",
      "alias": "adidas-prophere-black-white",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 990,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
    }
  }

  xemChiTiet = (newProduct) => {
    this.setState({
      productDetail: newProduct
    })
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="nav flex-column nav-pills justify-content-center" style={{ minHeight: 800 }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="shop" aria-selected="false">Shop</a>
              </div>

            </div>
            <div className="productList col-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <ProductList arrProduct={dataJson} xemChiTiet={this.xemChiTiet} />
                </div>
                <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">Shop</div>
              </div>
            </div>
          </div>
        </div>
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}

export default Giay;