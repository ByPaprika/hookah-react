import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import menuSectionPng1 from '../../assets/image/menuSectionPng1.jpg';
import menuSectionPng2 from '../../assets/image/menuSectionPng2.jpg';

import '../css/MenuSection.css';

// import Gallery from 'react-photo-gallery';

function MenuSection({ smoothProp }) {
  return (
    <div className="menu-section-wrapper">
      <Container className="pt-5 pb-5" fluid>
        <Row>
          <Col>
            <h2 className="textTopAbout text-center  ">Меню</h2>
            <hr className="short " />
          </Col>
        </Row>

        <Row className="firstRows pt-5 ">
          <Col sm={6} className="imgMenuSection1">
            <Image
              style={{ borderRadius: '20px' }}
              alt=""
              className="menuImage1"
              src={menuSectionPng1}
              fluid
            />{' '}
            *
            {/* <img
                  className="menuImage1"
                  style={{ borderRadius: '20px' }}
                  width="800px"
                  height="600px"
                  src={menuSectionPng1}
                  alt=""
                /> */}
          </Col>
          <Col className="text-center">
            <div className="textDownNews text-center">
              Дымные кальяны, вкуснейшие чаи и другие напитки в нашем заведении Cosa Nostra
            </div>
          </Col>
        </Row>
        <Row className="pb-5 pt-5">
          <Col className="text-center">
            <Link onClick={smoothProp} to="/menu/hookan">
              <button className="btnMy">Узнать подробнее о меню</button>
            </Link>
          </Col>
        </Row>
        <Row className="secondRows pt-5 ">
          <Col className="text-center">
            <div className="textDownNews text-center">
              У нас можно попробовать такие табаки как: Daily Hookah, MustHave, Darkside и многие
              другие. А также имеется огромный ассортимент вкусов!
            </div>
          </Col>
          <Col sm={6} className="imgMenuSection2">
            <Image
              style={{ borderRadius: '20px' }}
              alt=""
              className="menuImage1"
              src={menuSectionPng2}
              fluid
            />{' '}
            *
            {/* <img
                  className="menuImage1"
                  style={{ borderRadius: '20px' }}
                  width="800px"
                  height="600px"
                  src={menuSectionPng1}
                  alt=""
                /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuSection;
