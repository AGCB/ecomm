import React from 'react';
import MenuItem from './menuitem.component.jsx';
import './homepage.styles.scss';
import { Link } from 'react-router-dom';

const HomePage = (props) => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem title="HATS" subtitle="shop for hatz" history={props.history}/>
      <MenuItem title="Jackets" subtitle="shop for js" history={props.history}/>
      <MenuItem title="Womens" subtitle="shop for wos" history={props.history}/>
      <MenuItem title="Sneakers" subtitle="shop for sneak" history={props.history}/>
      <MenuItem title="Pants" subtitle="shop for pant" history={props.history}/>
    </div>
  </div>
)

export default HomePage;
