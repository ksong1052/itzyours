import React from 'react';
import './collectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ collection }) => {
  return (
    <div className='collectionPreview'>
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {
          collection.items
            .filter((item, index) => index < 4)
            .map((cItem) => (
            <CollectionItem key={cItem.id} item={cItem} />
          ))
        }
      </div>
    </div>
  )
};

export default CollectionPreview;
