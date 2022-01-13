import React from 'react';
import './collectionItem.scss';

// item : id, name, price, imageUrl
const CollectionItem = ({ item }) => {
  return (
    <div className='collectionItem'>
      <div 
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collectionFooter">
        <span className="name">{item.name}</span>
        ${item.price}
        {/* <span className="price">{item.price}</span> */}
      </div>   
      <button className='btn'>ADD TO CART</button>   
    </div>
  )
}

export default CollectionItem
