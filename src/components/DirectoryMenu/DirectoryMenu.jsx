import defaultSections from '../../config.js';
import MenuItem from '../MenuItem';
import './directory-menu.scss';

const DirectoryMenu = () => {
  return (
    <div className="directory-menu">
      {
        defaultSections.map(section => (
          <MenuItem
            key={section.id}
            title={section.title}
          />
        ))
      }
    </div>
  )
}

export default DirectoryMenu;
