import React from 'react';
import './collectionItem.scss';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

// item : id, name, price, imageUrl
const CollectionItem = ({ item, addItem, currentUser }) => {
  // const { id, name, price, imageUrl } = item;

  return (
    <div className='collectionItem'>

      {
        currentUser ?
          <>
            <div 
              className="image"
              style={{
                backgroundImage: `url(${item.imageUrl})`
              }}
            />
            <div className="collectionFooter">                
              <span className="name">{item.name}</span>
              ${item.price}                
            </div>   
            <button className='btn' onClick={() => addItem(item)}>ADD TO CART</button>
          </>             
        :  
          <>
            <div 
              className="image"
              style={{
                backgroundImage: `url(${item.imageUrl})`
              }}
            />
            <div className="collectionFooter">          
              <span className="name">{item.name}</span>
              ${item.price}         
            </div>
          </>                  
      }
         
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// Item을 cart에 추가할 때 store에 있는 state 변경
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
