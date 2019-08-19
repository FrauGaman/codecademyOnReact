import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Additionally from './Additionally/Additionally';
import Auth from './Auth/Auth';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import OpenMenuIcon from '../../Icons/Icons'
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
              <Auth setShowLogIn={this.props.setShowLogIn} setShowSignUp={this.props.setShowSignUp} userStatus={this.props.userStatus} userIsLogIn={this.props.userIsLogIn}/>
              <div className="menu__icon__box" onClick={this.showMenu}>
                <OpenMenuIcon iconName={'openMenuIcon'}/>
              </div>
            </div>
          </div>
        </nav>
        {this.state.isMenuShow && <BurgerMenu menu={this.props.menu} hideMenu={this.hideMenu} setShowLogIn={this.props.setShowLogIn} setShowSignUp={this.props.setShowSignUp} />}
        {this.state.isSearchShow && <Search hideSearch={this.hideSearch} />}
      </React.Fragment>
    );
  }
}

Nav.propTypes = {
  props: PropTypes.object,
};

export default Nav;
