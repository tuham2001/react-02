
// setup state giỏ hàng trên store

const stateGioHang = {
  gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {

  switch (action.type) {
    case 'THEM_GIO_HANG': {
      let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)

      if (index !== -1) {
        state.gioHang[index].soLuong += 1
      } else {
        state.gioHang.push(action.spGioHang)
      }
      //setState
      state.gioHang = [...state.gioHang]

      return { ...state }
    }
    case 'XOA_GIO_HANG': {
      let gioHangCapNhat = [...state.gioHang]

      // Tìm ra phần tử cần xóa dựa vào maSP
      let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1)
      }
      state.gioHang = gioHangCapNhat
      return { ...state }
    }
    case 'TANG_GIAM_SO_LUONG': {
      let gioHangCapNhat = [...state.gioHang]
      //Xử lý tăng giảm trên giỏ hàng cập nhật
      let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1
          } else {
            alert('Số lượng tối thiểu là 1')
          }
        }
      }
      //Lấy giá trị giỏ hàng cập nhật gàn vào state.gioHang
      state.gioHang = gioHangCapNhat
      return { ...state }
    }
    default: return { ...state }
  }
}

export default BaiTapGioHangReducer