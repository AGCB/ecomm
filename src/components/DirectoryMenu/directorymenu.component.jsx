import React from 'react';
import MenuItem from '../MenuItem/menuitem.component.jsx';
import pages from '../../config/pages.js';
import './directorymenu.styles.scss';

console.log('!! we have pages', pages);
const DirectoryMenu = () => {

  return (
    <div className="directory-menu">
      {
        pages.map(page => {
          const { ...pageProps} = page;
          return (
            <MenuItem pageProps={pageProps} />
          )
        })
      }
    {
      /*
       <MenuItem title="HATS" subtitle="shop for hatz" />
       <MenuItem title="Jackets" subtitle="shop for js" />
       <MenuItem title="Womens" subtitle="shop for wos" />
       <MenuItem title="Sneakers" subtitle="shop for sneak" />
       <MenuItem title="Pants" subtitle="shop for pant" />
        */

    }
    </div>
  )
}

export default DirectoryMenu;
