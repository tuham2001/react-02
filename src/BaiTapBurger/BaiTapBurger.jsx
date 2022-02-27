import React, { Component } from 'react';
import { connect } from 'react-redux';
import './burger.css'
class BaiTapBurger extends Component {

  renderBreadMid = () => {
    let { burger } = this.props;

    //Cách 1 : dùng for in
    let content = []
    for (let propBurger in burger) {
      let breadMid = []
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>)
      }
      content.push(breadMid)
    }
    return content

    //Cách 2 : dùng hàm map
    // return Object.entries(burger).map(([propsBurger, value], index) => {
    //   let breadMid = []
    //   for (let i = 0; i < value; i++) {
    //     breadMid.push(<div key={i} className={propsBurger}></div>)
    //   }
    //   return breadMid
    // })
  }

  renderMenu = () => {
    //lấy props từ redux
    let { menu, burger } = this.props;

    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button onClick={() => { this.props.addBreadMid(propsMenu, 1) }} className="btn-success">+</button>
            {burger[propsMenu]}
            <button onClick={() => { this.props.addBreadMid(propsMenu, -1) }} className="btn-danger">-</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài tập Burger</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td>Tổng cộng</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      //Tạo ra action
      const action = {
        type: 'ADD_BREADMID',
        propsBurger,
        amount
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);