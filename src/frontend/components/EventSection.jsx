import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosCall } from 'react-icons/io';

import { BsPeopleFill, BsGeoAlt, BsCalendarFill } from 'react-icons/bs';

import '../css/EventSection.css';

function EventSection() {
  return (
    <div className="event-section-wrapper">
      <Container className="pt-5 pb-5">
        <Row>
          <Col sm="12" className="topTextEvent text-center  ">
            Ваше важное событие — наша грандиозная работа
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsGeoAlt style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Расположение</h3>

            <div>
              ул. Промышленная, дом 6,
              <br /> ЦФТ "Нарвский"
              <span>, Санкт-Петербург</span>
            </div>
          </Col>
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsPeopleFill style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Вместимость</h3>

            <div>Банкет – до 25 человек</div>
          </Col>

          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <IoIosCall style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Контактный номер</h3>

            <div>+7(911)926-60-10</div>
          </Col>
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsCalendarFill className="text-danger" style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-danger ">Забронировать</h3>

            <div className="text-danger">
              Оставьте запрос — мы поможем устроить ваше мероприятие
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventSection;
