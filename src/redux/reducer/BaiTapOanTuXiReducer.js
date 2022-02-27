
const stateDefault = {
  mangDatCuoc: [
    { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: true },
    { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
    { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false }
  ],
  ketQua: "T PRO",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png' }
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

  switch (action.type) {

    case 'CHON_KEO_BUA_BAO': {
      //Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc]
      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true }
        }
        return { ...item, datCuoc: false }
      })
      state.mangDatCuoc = mangCuocUpdate
      return { ...state }
    }

    case 'RAN_DOM': {
      let soNgauNhien = Math.floor(Math.random() * 3)
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
      state.computer = quanCuocNgauNhien
      return { ...state }
    }

    case 'END_GAME': {
      let player = state.mangDatCuoc.find(item => item.datCuoc === true)
      let computer = state.computer
      switch (player.ma) {
        case 'keo':
          if (computer.ma === 'keo') {
            state.ketQua = 'hòa'
          } else if (computer.ma === 'bua') {
            state.ketQua = 'ngu'
          } else {
            state.soBanThang += 1
            state.ketQua = 'pro'
          }; break;
        case 'bua':
          if (computer.ma === 'keo') {
            state.soBanThang += 1
            state.ketQua = 'pro'
          } else if (computer.ma === 'bua') {
            state.ketQua = 'hòa'
          } else {
            state.ketQua = 'ngu'
          }; break;
        case 'bao':
          if (computer.ma === 'keo') {
            state.ketQua = 'ngu'
          } else if (computer.ma === 'bua') {
            state.soBanThang += 1
            state.ketQua = 'pro'
          } else {
            state.ketQua = 'hòa'
          }; break;
        default:
          state.soBanThang += 1
          state.ketQua = 'pro'
      };
      state.soBanChoi += 1
      return { ...state }
    }
    default: return { ...state }
  }
}

export default BaiTapOanTuXiReducer