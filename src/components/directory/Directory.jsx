import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import './directory.scss';
// import SectionData from '../../data/section.data.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => { 
  return (
    <div className="directoryMenu">      
      {
        sections.map((section) => (
          <MenuItem 
            key={section.id} 
            linkUrl={section.linkUrl} 
            title={section.title} 
            imageUrl={section.imageUrl} 
            size={section.size}             
          />
        ))
      }  
    </div>
  )
}
  
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections            
});

export default connect(
  mapStateToProps
)(Directory);
