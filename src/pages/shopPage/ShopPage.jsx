import React from 'react';
import './shopPage.scss';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';


const ShopPage = ({ match }) => {  
  // console.log("ShopPage - match:",match); 

  return (    
    <div className='shopPage'>       
      <Route exact path={`${match.path}`} component={CollectionOverview} /> 
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default ShopPage;
