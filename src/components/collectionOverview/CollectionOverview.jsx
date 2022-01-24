import React from 'react';
import './collectionOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionPreview/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections, match }) => {  
  // console.log("CollectionOverview - match:",match);
  
  return (
    <div className='collectionsOverview'>   
      {
        collections.map(collection => (
          <CollectionPreview 
            key={collection.id}  
            collection = {collection}
            match={match}
          />
        ))
      }      
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollections
// })

// 이것은 shop.data.js의 값을 배열에서 객체로 변경했기 때문에 key값으로 가져오는 함수로 변경
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(
  mapStateToProps
)(CollectionOverview);
