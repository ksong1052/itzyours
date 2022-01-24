import React from 'react';
import './collectionPreview.scss';
import { Link } from 'react-router-dom';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ collection, match }) => {
  // console.log("CollectionPreview - match:",match);
  // console.log("CollectionPreview - collection.title:",collection.title.toLowerCase());
  
  return (
    <div className='collectionPreview'>      
      <h1 className="title">
        {/* {collection.title.toUpperCase()} */}
        <Link to={`${match.path}/${collection.title.toLowerCase()}`}>
          {collection.title.toUpperCase()}
        </Link>
      </h1>
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
