import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import './directory.scss';
import SectionData from '../../data/section.data.js';

const Directory = () => {
  // const sections = [
  //   {
  //     title: 'hats',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2019/07/26/06/13/girl-4364022_960_720.jpg',
  //     id: 1,
  //     linkUrl: 'shop/hats'
  //   },
  //   {
  //     title: 'jackets',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/15/04/leather-2584298_960_720.jpg',
  //     id: 2,
  //     linkUrl: 'shop/jackets'
  //   },
  //   {
  //     title: 'shoes',
  //     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //     id: 3,
  //     linkUrl: 'shop/shoes'
  //   },
  //   {
  //     title: 'women',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2021/12/14/07/20/group-6869806_960_720.jpg',
  //     size: 'large',
  //     id: 4,
  //     linkUrl: 'shop/womens'
  //   },
  //   {
  //     title: 'men',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2017/04/07/16/47/interview-2211354_960_720.jpg',
  //     size: 'large',
  //     id: 5,
  //     linkUrl: 'shop/mens'
  //   }
  // ];

  return (
    <div className="directoryMenu">
      {
        SectionData.map((section) => (
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
  


export default Directory
