import React from 'react';

import news1 from '../../assets/image/news1.jpg';
import news2 from '../../assets/image/news2.jpg';
import news3 from '../../assets/image/news3.jpg';
import news4 from '../../assets/image/news4.jpg';

import sale1 from '../../assets/image/sale1.jpg';
import sale2 from '../../assets/image/sale2.jpg';

import { Container, CardDeck, Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import '../css/NewsSection.css';
import 'react-fancybox/lib/fancybox.css';
function NewsSection() {
  const arrNews = [{ name: 'Новости' }, { name: 'Акции' }, { name: 'Конкурсы' }];
  return (
    <div className="news-section-wrapper">
      <Container fluid>
        {/* <Row className="pt-5 pb-5">
          <Col className="text-center"></Col>
          <Col className="text-center">
            <div className="liNewsItems">
              <ListGroup horizontal>
                {arrNews.map((obj) => (
                  <ListGroup.Item style={{ width: '200px' }}>
                    <li>{obj.name}</li>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col className="text-center"></Col>
        </Row> */}

        <Row>
          <Col>
            <div className="textTopNews pb-5">
              <h2 className="textTopNews text-center mt-5">Последние новости</h2>
              <hr className="short text-center" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <div className="cardItem1">
              <Card
                className="cardItem1"
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  minWidth: '300px',
                  height: '763px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={news1}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Табак</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="textDownNews text-center">
                      Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                      Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className="pt-5">
            <Card
              style={{
                backgroundColor: '#230329',
                border: ' solid 5px white',
                borderRadius: '20px 20px 20px 20px',
                minWidth: '300px',
                height: '763px',
              }}>
              <Card.Img
                style={{ borderRadius: '20px 20px 0 0' }}
                height="300px"
                variant="top"
                src={news2}
              />
              <Card.Body>
                <Card.Title>
                  <div className="textDownNews text-center bold">Интерьер</div>
                </Card.Title>
                <Card.Text>
                  <div className="textDownNews text-center">
                    Небольшая обновочка интерьера.Теперь в нашем заведении стало намного комфортнее
                    и уютнее!
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="pt-5">
            <div className="cardItem3">
              <Card
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  minWidth: '300px',
                  height: '763px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={news3}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Мероприятие</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="textDownNews text-center">
                      Мы предлагаем вам забронировать наше помещение под любые виды мероприятий.
                      Отметь праздник с лучшими друзьями в хорошей атмосфере с дымными кальянами!
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className="pt-5">
            <Card
              style={{
                backgroundColor: '#230329',
                border: ' solid 5px white',
                borderRadius: '20px 20px 20px 20px',
                minWidth: '300px',
                height: '763px',
              }}>
              <Card.Img
                style={{ borderRadius: '20px 20px 0 0' }}
                height="300px"
                variant="top"
                src={news4}
              />
              <Card.Body>
                <Card.Title>
                  <div className="textDownNews text-center bold">Караоке</div>
                </Card.Title>
                <Card.Text>
                  <div className="textDownNews text-center">
                    Теперь в нашей VIP - комнате установлена КАРАОКЕ. Бронируйте ВИПку и
                    наслаждайтесь отличным звуком и своим исполнением!
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="textTopNews pb-5">
              <h2 className="textTopNews text-center mt-5">Акции</h2>
              <hr className="short text-center" />
            </div>
          </Col>
        </Row>
        <Row className="rowSales pb-5">
          <Col className="pt-5">
            <div className="cardItem1">
              <Card
                className="cardItem1"
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  minWidth: '300px',
                  minHeight: '560px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={sale1}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Скидка 10%</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="textDownNews text-center">
                      С созданием новой группы в VK, вступает в силу суперакция на скидку размером в
                      10%!
                    </div>
                  </Card.Text>
                </Card.Body>
                <div className="text-center pb-3">
                  <Button variant="dark">
                    <a target="_blank" href="https://vk.com/cosaloungebar?w=wall-200100813_14">
                      Узнать подробнее
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="pt-5">
            <Card
              style={{
                backgroundColor: '#230329',
                border: ' solid 5px white',
                borderRadius: '20px 20px 20px 20px',
                minWidth: '300px',

                minHeight: '560px',
              }}>
              <Card.Img
                style={{ borderRadius: '20px 20px 0 0' }}
                height="300px"
                variant="top"
                src={sale2}
              />
              <Card.Body>
                <Card.Title>
                  <div className="textDownNews text-center bold">Скидка для компании</div>
                </Card.Title>
                <Card.Text>
                  <div className="textDownNews text-center">Компаниям от 5 чел. - скидка 10%</div>
                </Card.Text>
              </Card.Body>
              <div className="btnNewsSection text-center pb-3">
                <Button variant="dark">
                  <a target="_blank" href="https://www.instagram.com/cosanostra.narvskiy/">
                    {' '}
                    Узнать подробнее
                  </a>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="textTopNews pb-5">
              <h2 className="textTopNews text-center mt-5">Конкурсы</h2>
              <hr className="short text-center" />
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="pt-5">
            <div className="cardItem1">
              <Card
                className="cardItem1"
                style={{
                  backgroundColor: '#230329',
                  border: ' solid 5px white',
                  borderRadius: '20px 20px 20px 20px',
                  maxWidth: '500px',
                }}>
                <Card.Img
                  style={{ borderRadius: '20px 20px 0 0' }}
                  height="300px"
                  variant="top"
                  src={news1}
                />
                <Card.Body>
                  <Card.Title>
                    <div className="textDownNews text-center bold">Новый табак</div>
                  </Card.Title>

                  <Card.Text>
                    <div className="textDownNews text-center">
                      Приходи к нам,чтобы попробовать один из самых дымных кальянов на Табабке💥💥💥
                      Куча разных вкусов табака от "Кактуса с ромашкой" до "Секса на даче"
                    </div>
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="dark">Узнать подробнее</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsSection;
