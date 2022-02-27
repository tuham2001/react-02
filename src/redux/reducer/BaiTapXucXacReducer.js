
const stateDefault = {
  taiXiu: true,
  mangXucXac: [
    { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    { ma: 2, hinhAnh: './img/gameXucXac/2.png' },
    { ma: 3, hinhAnh: './img/gameXucXac/3.png' }
  ],
  soBanThang: 0,
  tongSoBanChoi: 0
}

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'DAT_CUOC':
      state.taiXiu = action.taiXiu;
      return { ...state }
    case 'PLAY_GAME': {
      //Bước 1 xử lý random xúc xắc
      let mangXucXacNgauNhien = []
      for (let i = 0; i < 3; i++) {
        //Mỗi lần lặp random ra 1 số ngẫu nhiên từ 1 đến 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1
        //Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/gameXucXac/${soNgauNhien}.png` }
        //Push vào mảng xúc xắc ngẫu nhiên
        mangXucXacNgauNhien.push(xucXacNgauNhien)
      }
      state.mangXucXac = mangXucXacNgauNhien
      //Xử lý tăng bàn chơi 
      state.tongSoBanChoi += 1
      //Xử lý số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return tongDiem += xucXac.ma
      }, 0)
      //Xét điều kiện để người dùng win game
      if ((tongSoDiem > 10 && state.taiXiu === true) || (tongSoDiem <= 10 && state.taiXiu === false)) {
        state.soBanThang += 1
      }
      return { ...state }
    }
    default: return { ...state }
  }
}

export default BaiTapGameXucXacReducer