import React from 'react';
import './collection-preview.scss';

const CollectionPreview = ({collection}) => {
  const { items, title } = collection;
  return (
    <div className="collection-preview">
      <h1 className="collection-preview-title">{title}</h1>
      <div className="collection-preview-items">
        {
          items
            .filter((x,i) => i < 4)
            .map(item => {
              console.log('here are the items', items);
              return (
                <div className="collection-preview-item">
                  <span >{`${item.price}---${item.name}`}</span>
              </div >
              )
            })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
