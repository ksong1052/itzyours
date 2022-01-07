import React from 'react';
import './shopPage.scss';
import SHOP_DATA from '../../data/shop.data.js';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

const ShopPage = () => {
  const shopData = { 
    collections: SHOP_DATA
  }

  return (    
    <div className='shopPage'>
      {
        shopData.collections.map((collection) => (
          <CollectionPreview 
            key={collection.id}  
            collection = {collection}
          />
        ))
      }      
    </div>
  )
}

export default ShopPage
