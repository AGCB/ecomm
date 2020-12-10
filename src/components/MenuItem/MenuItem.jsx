import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({title, history, match}) => {
  /*
    using match.url I had a tricky bug to get through.
    i started with a history.push() with arg of ...
    `${match.url}/${title}`
    ..but that's wrong !
    .. take out the forwardslash. ugh

   */
  return (
  <div
    className="menu-item"
    onClick={ () => {
      history.push(`${match.url}${title}`)
    }}
    >
      <span className="title">{title}</span>
      <span className=""></span>
  </div>
  )
}


export default withRouter(MenuItem);
