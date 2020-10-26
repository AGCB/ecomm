import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, subtitle, history}) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <button
          className="subtitle"
          onClick={() => history.push(`/${title.toLowerCase()}`)}>{subtitle}</button>
      </div>
    </div>
  )
}
export default withRouter(MenuItem);
