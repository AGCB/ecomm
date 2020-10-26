import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({pageProps, history}) => {
  const {
    linkUrl,
    imageUrl,
    id,
    header,
    subtitle,
  } = pageProps;
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{header}</h1>
        <img className="picture" src={imageUrl}></img>
        <button
          className="subtitle"
          onClick={() => history.push(`/${linkUrl.toLowerCase()}`)}>{subtitle}</button>
      </div>
    </div>
  )
}
export default withRouter(MenuItem);
