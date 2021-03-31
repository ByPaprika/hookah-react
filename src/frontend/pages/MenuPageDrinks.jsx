import React from 'react';
import { Link } from 'react-router-dom';
import { setHeaderItem, setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch, useSelector } from 'react-redux';
import '../css/pageCss/MenuPage.css';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import menuItemDrinksPng1 from '../../assets/image/menuSectionDrinks1.jpg';
function MenuPageDrinks() {
  const activeMenuItem = useSelector(({ headerMenu }) => headerMenu.activeItemMenu);
  const arrMenu = [
    { name: 'Кальяны', link: 'menu/hookan', id: 0 },
    { name: 'Напитки', link: 'menu/drinks', id: 1 },
    { name: 'Чай', link: 'menu/tea', id: 2 },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderItem(1));
    dispatch(setMenuItem(1));
  }, []);
  return (
    <div className="wrapperMenuPage">
      <Container className="pt-5 ">
        <Row className="pt-5 pb-4">
          <Col className="text-center">
            <div className="topTextMenu">Напитки</div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center"></Col>
          <Col className="text-center">
            <div className="liMenuItems">
              <ListGroup horizontal>
                {arrMenu.map((obj) => (
                  <Link key={obj.id} to={`/${obj.link}`}>
                    <ListGroup.Item
                      className={
                        activeMenuItem === obj.id ? 'activeMenuItem text-center' : 'text-center'
                      }
                      style={{ width: '200px' }}>
                      <li>{obj.name}</li>
                    </ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col className="text-center"></Col>
        </Row>
      </Container>
      <Container className="pt-5 pb-5">
        <Row className="pb-5">
          <Col className="text-center">
            <Image src={menuItemDrinksPng1} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuPageDrinks;
