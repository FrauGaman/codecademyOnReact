import React, { useEffect } from 'react';
import menu from '../../config/menu';
import UpgradeBtn from '../nav/Additionally/UpgradeBtn';
import MenuIcons from '../Icons';
import './burgerMenu.sass';
import SignUpBtn from '../nav/Auth/SignUpBtn';

function BurgerMenu({ hideMenu }) {
  useEffect(() => {
    if (typeof (hideMenu) === 'function') {
      hideMenu = hideMenu;
    } else {
      hideMenu = console.log('You have some problems');
    }
  });
  return (
    <div className="burger__menu">
      <div className="burger__menu__content">
        <div className="close__icon" onClick={hideMenu}>
          <MenuIcons iconId={4} />
        </div>
        <input type="text" placeholder="e.g. Python, Data Science, Javascript" />
        <div className="menu__search__icon">
          <MenuIcons iconId={'searchIcon'} width={24} height={24} color={'#000'} />
        </div>
        <ul>
          {menu.items.map(item => <li key={item.linkName}><a href="null" className="burger__menu__link">{item.linkName}</a></li>
          )}
        </ul>
        <a href="null" className="burger__menu__link">Log in</a>
        <UpgradeBtn/>
        <SignUpBtn signUpBtnClass={"signUp__btn signUp__btn__menu"} />
      </div>
    </div>
  );
}

export default BurgerMenu;

// BurgerMenu.defaultProps = {
//   linkName: 'lololo',
// };
//
// BurgerMenu.propTypes = {
//   linkName: PropTypes.string,
// };