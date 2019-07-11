import React from 'react';
import PropTypes from 'prop-types';
import UpgradeBtn from '../nav/Additionally/UpgradeBtn';
import { ReactComponent as CloseMenuIcon} from '../../img/icons/CloseMenuIcon.svg';
import { ReactComponent as SearchIcon} from '../../img/icons/SearchIcon.svg';
import './burgerMenu.sass';
import SignUpBtn from '../nav/Auth/SignUpBtn';

function BurgerMenu({ menu, hideMenu }) {
  return (
    <div className="burger__menu">
      <div className="burger__menu__content">
        <div className="close__icon" onClick={hideMenu}>
          <CloseMenuIcon />
        </div>
        <input type="text" placeholder="e.g. Python, Data Science, Javascript"/>
        <div className="menu__search__icon">
          <SearchIcon className="search__icon" />
        </div>
        <ul>
          {menu.items ?
            menu.items.map(({ id, URL = '/all', linkName = 'linkPlug' }) =>
              <li key={id}><a href={URL} className="burger__menu__link">{linkName}</a></li>
          ) : []}
        </ul>
        <a href="{null}" className="burger__menu__link">Log in</a>
        <UpgradeBtn />
        <SignUpBtn signUpBtnClass={"signUp__btn signUp__btn__menu"}/>
      </div>
    </div>
  );
}
BurgerMenu.propTypes = {
  menu: PropTypes.objectOf(PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.number,
    URL: PropTypes.string,
    linkName: PropTypes.string,
  })))),
  hideMenu: PropTypes.func,
};
export default BurgerMenu;
