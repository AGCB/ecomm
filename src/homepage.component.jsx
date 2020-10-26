import React from 'react';
import MenuItem from './menuitem.component.jsx';
import './homepage.styles.scss';
import { Link } from 'react-router-dom';

const HomePage = (props) => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem title="HATS" subtitle="shop for hatz" />
      <MenuItem title="Jackets" subtitle="shop for js" />
      <MenuItem title="Womens" subtitle="shop for wos" />
      <MenuItem title="Sneakers" subtitle="shop for sneak" />
      <MenuItem title="Pants" subtitle="shop for pant" />
    </div>
  </div>
)

export default HomePage;
