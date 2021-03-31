import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import backGImage from '../../assets/image/dark-leather.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { postInfoEvent } from '../redux/actions/serverMethods';

import Button from 'react-bootstrap/Button';
import '../css/EventRequestSection.css';

const useStylesConfirmModal = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    borderRadius: '10px',
    backgroundImage: `url(${backGImage})`,
    backgroundPosition: 'center',
    backgroundColor: ' white;',
    border: '2px solid #000',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(0, 0, 0),
    width: '600px',
    height: '90px',
    ['@media (max-width:767px)']: { width: '375px', height: '130px' },
  },
  imgClose: {
    float: 'right',
    margin: 30,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    width: 193,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function EventRequestSection() {
  const [openConfirmModal, setopenConfirmModal] = React.useState(false);

  const handleOpenConfirmModal = () => {
    setopenConfirmModal(true);
  };

  const handleCloseConfirmModal = () => {
    setopenConfirmModal(false);
  };
  const dispatch = useDispatch();
  const classesConfirmModal = useStylesConfirmModal();
  const myRef = React.useRef();

  const [nameUser, setNameUser] = React.useState('');
  const [phoneUser, setPhoneUser] = React.useState('');
  const [emailUser, setEmailUser] = React.useState('');
  const [descriptionUser, setDescriptionUser] = React.useState('');

  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const handleChangeEmailUser = (event) => {
    setEmailUser(event.target.value);
  };

  const handleChangeDescriptionUser = (event) => {
    setDescriptionUser(event.target.value);
  };

  const eventRequest = () => {
    if (nameUser !== '' && phoneUser !== '' && emailUser !== '' && descriptionUser !== '') {
      let info = JSON.stringify({
        name: nameUser,
        phone: phoneUser,
        email: emailUser,
        description: descriptionUser,
      });
      handleOpenConfirmModal();
      dispatch(postInfoEvent(info));
      // setInterval(() => {
      //   dispatch(postInfoEvent(info));
      // }, 3000);
    } else {
      alert('Введите данные');
    }
  };

  return (
    <div className="event-request-section-wrapper">
      <Container fluid ref={myRef} d className="uniInput pt-5 pb-5">
        <Row>
          <Col className=" text-center pb-5 ">
            <h2 className="topTextRequest">Оставить запрос на мероприятие</h2>
            <hr className="short text-center" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3 ">
            <input value={nameUser} onChange={handleChangeNameUser} placeholder="ФИО" type="text" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3 ">
            <input
              value={phoneUser}
              onChange={handleChangePhoneUser}
              placeholder="Телефон"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3 ">
            <input
              value={emailUser}
              onChange={handleChangeEmailUser}
              placeholder="Е-мейл"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3 ">
            <input
              value={descriptionUser}
              onChange={handleChangeDescriptionUser}
              placeholder="Расскажите о мероприятии"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-5 ">
            <Button onClick={eventRequest} style={{ width: '200px' }} variant="dark">
              <div className="btnRequest">Отправить</div>
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classesConfirmModal.modal}
              open={openConfirmModal}
              onClose={handleCloseConfirmModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}>
              <Fade in={openConfirmModal}>
                <div className={classesConfirmModal.paper}>
                  <h2 className="modalConfirmTopText">Ваш мероприятие забронировано!</h2>
                  <p className="modalConfirmDownText">В скором времени мы с вами свяжемся</p>
                </div>
              </Fade>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventRequestSection;
