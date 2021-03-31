import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import '../css/BurgerMenu.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/image/logo.png';

export default class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  render() {
    const smoothToUp = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      this.closeMenu();
    };
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        left>
        <div className="text-center pb-5">
          <img src={headerLogo} alt="" />
        </div>
        <Link onClick={smoothToUp} to="/">
          <div className="menu-item-my">Главная</div>
        </Link>
        <Link onClick={smoothToUp} to="/menu/hookan">
          <div className="menu-item-my"> Меню</div>
        </Link>
        <Link onClick={smoothToUp} to="/news">
          {' '}
          <div className="menu-item-my">Новости</div>
        </Link>
        <Link onClick={smoothToUp} to="/galery">
          <div className="menu-item-my">Галерея</div>
        </Link>
      </Menu>
    );
  }
}
