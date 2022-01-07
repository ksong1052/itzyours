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
        <span className="name">{ item.name }</span>
        <span className="price">{ item.price }</span>
      </div>      
    </div>
  )
}

export default CollectionItem
