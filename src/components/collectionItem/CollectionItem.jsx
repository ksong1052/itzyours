import React from 'react';
import './collectionItem.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

// item : id, name, price, imageUrl
const CollectionItem = ({ item, addItem }) => {
  // const { id, name, price, imageUrl } = item;

  return (
    <div className='collectionItem'>
      <div 
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collectionFooter">
        {/* <span className="name">{name}</span> */}
        <span className="name">{item.name}</span>
        ${item.price}
        {/* <span className="price">{item.price}</span> */}
      </div>   
      <button className='btn' onClick={() => addItem(item)}>ADD TO CART</button>   
    </div>
  )
}

// Item을 cart에 추가할 때 store에 있는 state 변경
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
