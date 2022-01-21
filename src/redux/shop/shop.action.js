import ShopActionTypes from './shop.types';

export const setCollectionId = (item) => ({
  type: ShopActionTypes.SET_COLLECTION_ID,
  payload: item
});