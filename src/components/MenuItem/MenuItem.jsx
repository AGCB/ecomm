import React from 'react';
import './menu-item.scss';

const MenuItem = ({title}) => {
  return (
  <div className="menu-item">
      <span className="title">{title}</span>
      <span className=""></span>
  </div>
  )
}


export default MenuItem;
