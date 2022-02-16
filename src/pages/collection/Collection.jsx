import React from 'react';
import './collection.scss';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selector';

const Collection = ({ collection }) => {  
  const { title, items } = collection; 
  
  return (
    <div className='collection'>      
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

//⭐ https://letsbegin.tistory.com/4
// https://react-redux.js.org/api/connect

// 1.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

// 2.
// const mapStateToProps = (state, ownProps) => {
//   const { collectionId } = ownProps.match.params;
//   console.log("mapStateToProps collectionId:", collectionId);
//   return {
//     collection: selectCollection(collectionId)(state)
//   }  
// };

export default connect(mapStateToProps)(Collection);





