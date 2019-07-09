import React from 'react';

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Additionally from "./Additionally/Additionally";
import Auth from "./Auth/Auth";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Search from "./Search/Search";

import MenuIcon from '../Icons'

import './nav.sass'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchShow: false,
      isMenuShow: false
    };

    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showSearch() {
    this.setState(state => ({
        isSearchShow: !state.isSearchShow
      })
    )
  }

  hideSearch() {
    this.setState({
      isSearchShow: false
    })
  }

  showMenu() {
    this.setState(state => ({
      isMenuShow: !state.isMenuShow
      })
    )
  }

  hideMenu() {
    this.setState({
        isMenuShow: false
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav__container">
            <div className="nav__links">
              <Logo/>
              <Navigation
                Menu={this.props.menu}
                URL={this.props.menu.URL}
                linkName={this.props.menu.linkName}
              />
            </div>
            <div className="users__actions">
              <Additionally showSearch={this.showSearch}/>
              <Auth/>
              <div className="menu__icon__box" onClick={this.showMenu}>
                <MenuIcon iconId={3}  />
              </div>

            </div>
          </div>
        </nav>
        {this.state.isMenuShow ?
          <BurgerMenu hideMenu={this.hideMenu}/>
          : ""}

        {this.state.isSearchShow ?
          <Search hideSearch={this.hideSearch}/>
          : ""}
      </React.Fragment>

    )
  }

}

export default Nav