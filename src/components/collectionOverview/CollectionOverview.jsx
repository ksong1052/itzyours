import React from 'react';
import './collectionOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionPreview/CollectionPreview';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {  
  return (
    <div className='collectionsOverview'>   
      {
        collections.map(collection => (
          <CollectionPreview 
            key={collection.id}  
            collection = {collection}
          />
        ))
      }      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(
  mapStateToProps
)(CollectionOverview);
