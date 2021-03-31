import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BurgerMenu } from '../components';
import { Navbar, Container, NavbarBrand, Nav, Row, Col } from 'react-bootstrap';
import headerLogo from '../../assets/image/logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import '../css/Header.css';
function Header({ activeItemProp, clickSmooth }) {
  const [backgroundImageHeader, setBackgroundImageHeader] = React.useState('defaultHeader');
  const [show, setShow] = React.useState(false);
  const toggleShowClick = () => {
    setShow(false);
  };
  const liItems = [
    { name: 'МЕНЮ', link: 'menu/hookan', id: 1 },
    { name: 'НОВОСТИ', link: 'news', id: 2 },
    { name: 'ГАЛЕРЕЯ', link: 'galery', id: 0 },
  ];
  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      setBackgroundImageHeader('changeHeader');
    } else {
      setBackgroundImageHeader('defaultHeader');
    }
  };

  const navbarStyle = {
    height: '80px',
  };

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div>
      <Navbar
        className={
          backgroundImageHeader === 'defaultHeader' && activeItemProp === null
            ? 'navbarBackGroundTop'
            : 'navbarBackGroundDefault'
        }
        style={navbarStyle}
        fixed="top"
        expand="md"
        bg="dark"
        variant="dark">
        <Container>
          <NavbarBrand>
            <Link to="/">
              <img onClick={() => clickSmooth()} src={headerLogo} alt="logo" />
            </Link>
          </NavbarBrand>

          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div className="ulHeader">
                {liItems.map((obj) => (
                  <li
                    onClick={() => clickSmooth()}
                    className={activeItemProp === obj.id ? 'active' : ''}
                    key={`${obj.name}:${obj.id}`}>
                    <Link key={obj.id} to={`/${obj.link}`}>
                      {obj.name}{' '}
                    </Link>
                  </li>
                ))}
              </div>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
Header.propTypes = {
  activeItemProp: PropTypes.string.isRequired,
  clickSmooth: PropTypes.func.isRequired,
};

Header.defaultProps = {
  activeItemProp: null,
};

export default Header;
