import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({pageProps, history}) => {
  const {
    componentName,
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
        <Link to={componentName}>using rrd's link</Link>
        {/*
          if we need more fine grained, we could always skip the Link
          and use a button with history.push()
          <button onClick={() => {
              history.push(componentName)
            }}>using history.push</button>
        */}

      </div>
    </div>
  )
}
export default withRouter(MenuItem);
