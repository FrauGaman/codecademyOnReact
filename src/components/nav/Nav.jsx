import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Additionally from './Additionally/Additionally';
import Auth from './Auth/Auth';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import { ReactComponent as OpenMenuIcon } from '../../img/OpenMenuIcon.svg'
// import MenuIcon from '../Icons';
import './nav.sass';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchShow: false,
      isMenuShow: false
    };
  };
  showSearch = () => {
    this.setState(state => ({
        isSearchShow: !state.isSearchShow,
      })
    )
  };
  hideSearch = () => {
    this.setState({
      isSearchShow: false,
    })
  };
  showMenu = () => {
    this.setState(state => ({
        isMenuShow: !state.isMenuShow,
      })
    )
  };
  hideMenu = () => {
    this.setState({
        isMenuShow: false,
      }
    )
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav__container">
            <div className="nav__links">
              <Logo/>
              <Navigation
                menu={this.props.menu}
              />
            </div>
            <div className="users__actions">
              <Additionally showSearch={this.showSearch} />
              <Auth/>
              <div className="menu__icon__box" onClick={this.showMenu}>
                <OpenMenuIcon />
              </div>
            </div>
          </div>
        </nav>
        {this.state.isMenuShow && <BurgerMenu menu={this.props.menu} hideMenu={this.hideMenu} />}
        {this.state.isSearchShow && <Search hideSearch={this.hideSearch} />}
      </React.Fragment>
    );
  }
}

export default Nav;
