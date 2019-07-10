import React from 'react';
import menu from '../../config/menu'
import UpgradeBtn from "../nav/Additionally/UpgradeBtn";
import MenuIcons from '../Icons'
import './burgerMenu.sass'
import SignUpBtn from "../nav/Auth/SignUpBtn";

function BurgerMenu(props) {
  return (
    <div className="burger__menu">
      <div className="burger__menu__content">
        <div className="close__icon" onClick={props.hideMenu} >
          <MenuIcons iconId={4}/>
        </div>
        <input type="text" placeholder="e.g. Python, Data Science, Javascript"/>
        <div className="menu__search__icon">
          <MenuIcons iconId={"searchIcon"} width={24} height={24} color={'#000'}/>
        </div>
        <ul>
          {menu.items.map(item =>
            <li key={item.linkName}><a href="#" className="burger__menu__link">{item.linkName}</a></li>
          )}
        </ul>
        <a href="#" className="burger__menu__link">Log in</a>

        <UpgradeBtn />

        <SignUpBtn SignUpBtnClass={"signUp__btn signUp__btn__menu"}/>
      </div>


    </div>
  )
}

export default BurgerMenu