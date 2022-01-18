import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // 이것은 window.localStorage를 handling한다.

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// ⭐ Webpage가 refresh되었을 때 기존에 저장되어 있는 values를 유지 시킴
// localStorage에서 cart state 저장
// persistConfig => localstrorage에 root라는 이름으로 cart state를 저장 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);