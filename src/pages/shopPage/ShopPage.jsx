import React from 'react';
import './shopPage.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/withSpinner/WithSpinner';

// HOC 
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(Collection);

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
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (    
      <div className='shopPage'>       
        {/* HOC 사용 전 */}
        {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> 
        <Route path={`${match.path}/:collectionId`} component={Collection} /> */}

        {/* HOC 사용 후 */}
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading}{...props} />} /> 
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading}{...props} />} />
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
