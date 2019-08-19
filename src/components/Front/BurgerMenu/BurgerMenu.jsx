import React from 'react';
import PropTypes from 'prop-types';
import UpgradeBtn from '../Nav/Additionally/UpgradeBtn';
import SignUpBtn from '../Nav/Auth/SignUpBtn';
import Icon from '../../Icons/Icons';
import './burgerMenu.sass';

function BurgerMenu({ menu, hideMenu, setShowLogIn, setShowSignUp }) {
  return (
    <div className="burger__menu">
      <div className="burger__menu__content">
        <div className="close__icon" onClick={hideMenu}>
          <Icon iconName={'closeMenuIcon'} />
        </div>
        <input type="text" placeholder="e.g. Python, Data Science, Javascript"/>
        <div className="menu__search__icon">
          <Icon iconName={'searchIcon'} className={'search__icon__menu'} />
        </div>
        <ul>
          {!!menu.length &&
            menu.map(({ id, URL = '/all', linkName = 'linkPlug' }) =>
              <li key={id}><a href={URL} className="burger__menu__link">{linkName}</a></li>
          )}
        </ul>
        <a href={null} className="burger__menu__link" onClick={() => setShowLogIn(true)}>Log in</a>
        <UpgradeBtn />
        <SignUpBtn signUpBtnClass={'signUp__btn signUp__btn__menu'} setShowSignUp={setShowSignUp} />
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  menu: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.number,
    URL: PropTypes.string,
    linkName: PropTypes.string,
  }))),
  hideMenu: PropTypes.func,
  setShowLogIn: PropTypes.func,
  setShowSignUp: PropTypes.func,
};

export default BurgerMenu;
