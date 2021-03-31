import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteIdCompItems, editorIdCompItems, postInfoComp } from '../redux/actions/serverMethods';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Col, Row } from 'react-bootstrap';
import Fade from '@material-ui/core/Fade';
import '../css/TrBlockComp.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    borderRadius: '10px',

    backgroundPosition: 'center',
    backgroundColor: ' white;',
    border: '2px solid #000',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(0, 0, 0),
    width: '530px',
    height: '320px',
    ['@media (max-width:767px)']: { height: '480px' },
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
function TrBLockComp({ id, name, phone, points }) {
  const [open, setOpen] = React.useState(false);

  const [nameUser, setNameUser] = React.useState(name);
  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const [phoneUser, setPhoneUser] = React.useState(phone);
  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const [pointsUser, setPointsUser] = React.useState(points);
  const handleChangePointsUser = (event) => {
    setPointsUser(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    setNameUser(name);
    setPhoneUser(phone);
    setPointsUser(points);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const delIdItem = (ids) => {
    let tokenFromLocalStorage = localStorage.getItem('token');
    dispatch(deleteIdCompItems(ids, tokenFromLocalStorage));
    window.location.reload();
  };

  const editIdItem = (ids) => {
    let info = JSON.stringify({
      name: nameUser,
      phone: phoneUser,
      points: pointsUser,
    });
    let tokenFromLocalStorage = localStorage.getItem('token');
    dispatch(editorIdCompItems(ids, info, tokenFromLocalStorage));
    window.location.reload();
  };
  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <Container fluid>
                <Row>
                  <Col className="text-center">
                    <h2 id="transition-modal-title">Редактирование # {id}</h2>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center">Имя</Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <div className="redactor_item">
                      <input
                        value={nameUser}
                        onChange={handleChangeNameUser}
                        type="text"
                        name="name"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center">Телефон</Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <div className="redactor_item">
                      <input
                        value={phoneUser}
                        onChange={handleChangePhoneUser}
                        type="text"
                        name="name"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center">Очки</Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <div className="redactor_item">
                      <input
                        value={pointsUser}
                        onChange={handleChangePointsUser}
                        type="text"
                        name="name"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="pt-3">
                  <Col className="text-center">
                    <Button onClick={() => editIdItem(id)} variant="dark">
                      Сохранить
                    </Button>
                  </Col>
                  <Col className="text-center">
                    <Button onClick={handleClose} variant="dark">
                      Отменить
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
        </Modal>
      </div>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{points}</td>
        <td>
          <Button onClick={handleOpen} variant="dark">
            Изменить
          </Button>
        </td>
        <td>
          <Button
            onClick={() => {
              delIdItem(id);
            }}
            variant="dark">
            Удалить
          </Button>
        </td>
      </tr>
    </>
  );
}

export default TrBLockComp;
