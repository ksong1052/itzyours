import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// 이것은 shop.data.js의 값을 배역에서 객체로 변경했기 때문이다.
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);


// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }

// 1.
// export const selectCollection = collectionUrlParam => 
//   createSelector(
//     [selectShopCollections],
//     collections => 
//       collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//       )      
//   );

// 2.
// export const selectCollection = (collectionUrlParam) => {
//   return createSelector(
//     [selectShopCollections], 
//     (collections) =>
//       collections.find(
//         (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//       )
//   );
// };

// 3. 이렇게 변경되면 selectCollectionForPreview()를 이용해서 key에 대한 value들을 가져오게 해야 한다.
// 이것은 shop.data.js의 값을 배역에서 객체로 변경했기 때문이다.
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]    
  );
