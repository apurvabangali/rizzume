import { Fragment, useState } from 'react';
import { INavMenuItemProps } from './MenuItem.interface';

import { NavMenuPopover } from './NavMenuPopover';

export const NavMenuItem = ({ caption, popoverChildren }: INavMenuItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <button
        onClick={handleClick}
        aria-describedby={'mark'}
        className="flex items-center"
      >
        {caption}
        <img
          src='/icons/dropdown-arrow.svg'
          alt="dropdown-arrow"
          width="20"
          height="20"
          className={`${anchorEl ? 'scale-y-[-1]' : ''}`}
        />
      </button>
      <NavMenuPopover isOpen={!!anchorEl} anchorElement={anchorEl} id="mark" onClose={handleClose}>
        {popoverChildren}
      </NavMenuPopover>
    </Fragment>
  );
};
