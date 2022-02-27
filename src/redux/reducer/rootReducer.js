import { combineReducers } from 'redux'

import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer'
import { BurgerReducer } from './BurgerReducer'
const rootReducer = combineReducers({ //store tổng của ứng dụng
  stateGioHang: BaiTapGioHangReducer, //state giỏ hàng
  BaiTapGameXucXacReducer, //state BaiTapGame
  BaiTapOanTuXiReducer, //state bài tập oẳn tù xì
  BaiTapDatVeReducer, //state bài tập đặt vé
  BurgerReducer
})

export default rootReducer