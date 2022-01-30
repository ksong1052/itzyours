import React from 'react';
import './shopPage.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';


// 1. Functional Component
// const ShopPage = ({ match }) => {  
//   // console.log("ShopPage - match:",match); 

//   return (    
//     <div className='shopPage'>       
//       <Route exact path={`${match.path}`} component={CollectionOverview} /> 
//       <Route path={`${match.path}/:collectionId`} component={Collection} />
//     </div>
//   )
// }

// export default ShopPage;


// 2. Class Component


class ShopPage extends React.Component {  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (    
      <div className='shopPage'>       
        <Route exact path={`${match.path}`} component={CollectionOverview} /> 
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    )
  }  
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
}) 

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
