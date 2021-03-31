import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import '../css/Footer.css';

import { FaYandex } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaVk } from 'react-icons/fa';
function Footer({ clickSmooth }) {
  const liItems = [
    { name: 'Меню', link: 'menu', id: 1 },
    { name: 'Новости', link: 'news', id: 2 },
    { name: 'Галерея', link: 'galery', id: 0 },
  ];

  return (
    <div className="footerClass">
      <Container fluid>
        <Row className="pb-3 mediaAlign">
          <Col className=" pdCol mediaAlign" sm="4">
            <h2 className="headlineText mediaAlign ">Основные разделы</h2>
            <div className="menuFooter">
              <li onClick={() => clickSmooth()}>
                <Link to="/">Главная</Link>
              </li>
              {liItems.map((obj) => (
                <li onClick={() => clickSmooth()} key={`${obj.name}:${obj.id}`}>
                  <Link key={obj.id} to={`/${obj.link}`}>
                    {obj.name}
                  </Link>
                </li>
              ))}
            </div>
          </Col>
          <Col className="mediaAlign pdCol " sm="4">
            <h2 className="mediaAlign headlineText">Контакты</h2>
            <span className="textAdress">
              {' '}
              ул. Промышленная, дом 6, ЦФТ "Нарвский",
            </span> <br /> <span>Санкт-Петербург</span>
            <br />
            +7 (911) 926-60-10
          </Col>

          <Col className="mediaAlign social " sm="4">
            <h2 className="mediaAlign headlineText  ">Кальянная</h2>
            <div className="hookanFooterText text-left">
              Cosa Nostra это антикафе, у нас вы сможете насладиться вкуснейшими ароматами дымного
              кальяна в кругу своих друзей. Мы создали все условия для отличного отдыха.
            </div>
            <div className="pt-3 text-center">
              <a href="https://vk.com/cosaloungebar" rel="noreferrer" target="_blank">
                <i>
                  <FaVk className="text-light" style={{ height: '30px', width: '30px' }} />
                </i>
              </a>
              <a
                href="https://www.instagram.com/cosanostra.narvskiy/"
                rel="noreferrer"
                target="_blank">
                <i>
                  <AiFillInstagram
                    className="text-light"
                    style={{ height: '30px', width: '30px' }}
                  />
                </i>
              </a>
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/?from=api-maps&ll=30.392614%2C59.912601&mode=routes&origin=jsapi_2_1_74&rtext=~59.898774%2C30.272929&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fll%3D30.273%252C59.899%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A1%25D0%25B0%25D0%25BD%25D0%25BA%25D1%2582-%25D0%259F%25D0%25B5%25D1%2582%25D0%25B5%25D1%2580%25D0%25B1%25D1%2583%25D1%2580%25D0%25B3%252C%2520%25D0%259F%25D1%2580%25D0%25BE%25D0%25BC%25D1%258B%25D1%2588%25D0%25BB%25D0%25B5%25D0%25BD%25D0%25BD%25D0%25B0%25D1%258F%2520%25D1%2583%25D0%25BB%25D0%25B8%25D1%2586%25D0%25B0%252C%25206&z=13"
                rel="noreferrer"
                target="_blank">
                <i>
                  <FaYandex className="text-white" style={{ height: '25px', width: '25px' }} />
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  clickSmooth: PropTypes.func.isRequired,
};

export default Footer;
