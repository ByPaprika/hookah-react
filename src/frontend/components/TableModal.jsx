import React from 'react';

import closeIconModal from '../../assets/image/closeDoteModal.png';
import backGImage from '../../assets/image/dark-leather.png';
import { Link } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';
import { Container, Row, Col } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { postInfoTable } from '../redux/actions/serverMethods';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalConfirm } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../css/TableModal.css';

let re = new RegExp('^.*[^A-zА-яЁё].*$');

const useStyles = makeStyles((theme) => ({
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
    width: '530px',
    height: '430px',
    ['@media (max-width:767px)']: { width: '375px', height: '600px' },
  },
  imgClose: {
    // position: 'fixed',
    // right: '35%',
    // top: '22%',
    // bac
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
    width: '500px',
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

const GreenCheckbox = withStyles({
  root: {
    color: purple[400],
    '&$checked': {
      color: purple[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'purple',
      },
      '&:hover fieldset': {
        borderColor: 'purple',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      },
    },
  },
})(TextField);

function TableModal() {
  const dispatch = useDispatch();

  const arrData = useSelector(({ nowData }) => nowData.data);
  const arrTime = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];
  const classes = useStyles();
  const classesConfirmModal = useStylesConfirmModal();
  const [open, setOpen] = React.useState(false);
  const [oopsOpen, setOopsOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const [data, setData] = React.useState('');
  const [time, setTime] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [count, setCount] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [checkName, setCheckName] = React.useState(false);
  const [labelName, setLabelName] = React.useState('Ваше имя');

  const [openConfirmModal, setopenConfirmModal] = React.useState(false);

  const handleOpenConfirmModal = () => {
    setopenConfirmModal(true);
  };

  const handleCloseConfirmModal = () => {
    setopenConfirmModal(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setName('');
    setPhone('+7');
    setData('');
    setTime('');
    setDescription('');
    setCount('');
    setCheck(false);

    setOpen(false);
  };
  const handleCloseOops = () => {
    setOopsOpen(false);
  };

  const handleChangeDate = (event) => {
    setData(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeCount = (event) => {
    if (!isNaN(event.target.value) && event.target.value < 100) {
      setCount(event.target.value);
    }
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangePhone = (event) => {
    if (!isNaN(event.target.value) && event.target.value.length < 13) {
      setPhone(event.target.value);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    if (re.test(event.target.value)) {
      setLabelName('Имя только из букв');
      setCheckName(false);
    } else {
      setLabelName('Ваше имя');
      setCheckName(true);
    }
  };

  const checkChanger = () => {
    setCheck(!check);
  };
  const confirmClick = (event) => {
    if (
      data === '' ||
      time === '' ||
      phone === '' ||
      name === '' ||
      count === '' ||
      !check ||
      !checkName
    ) {
      alert('Введите все данные');
      event.preventDefault();
    } else {
      event.preventDefault();
      let info = JSON.stringify({
        name,
        phone,
        description,
        count,
        data,
        time,
      });
      handleOpenConfirmModal();
      // setInterval(() => {
      //   dispatch(postInfoTable(info));
      //   window.location.reload();
      // }, 3000);
      dispatch(postInfoTable(info));
      window.location.reload();
    }
  };

  return (
    <div>
      <a className="btnMy" onClick={handleOpen}>
        ЗАБРОНИРОВАТЬ СТОЛ
      </a>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={oopsOpen}
        onClose={handleCloseOops}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={oopsOpen}>
          <div className={classes.paper}>
            {/* <img
              className={classes.imgClose}
              id="btnClose"
              onClick={handleCloseOops}
              src={closeIconModal}
              alt=""
            /> */}
            <h2 id="tableNotAvailable">Столов больше нет</h2>
            <div id="tableNotAvailableText">Заходите позже!</div>
          </div>
        </Fade>
      </Modal>

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
            <h2 id="transition-modal-title">Забронировать столик</h2>
            <form className={classes.root} noValidate>
              <Container fluid>
                <Row className="rowTableModal pt-3">
                  <Col className="colRightTable">
                    <div className="item">
                      <CssTextField
                        required
                        className={classes.margin}
                        id="1custom-css-standard-input"
                        label={labelName}
                        onChange={handleChangeName}
                        value={name}
                      />
                    </div>
                  </Col>
                  <Col className="colLeftTable">
                    <div className="item">
                      <CssTextField
                        required
                        className={classes.margin}
                        label="Ваш телефон"
                        id="custom-css-standard-input"
                        value={phone}
                        onChange={handleChangePhone}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="rowTableModal pt-3 colRightTable">
                  <Col>
                    <div className="item">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Дата *</InputLabel>
                        <Select
                          required
                          className="text-left"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={data}
                          onChange={handleChangeDate}>
                          {arrData &&
                            arrData.map((value, index) => (
                              <MenuItem key={index} value={value}>
                                {value}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Col>
                  <Col className="colLeftTable">
                    {' '}
                    <div className="item">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Время *</InputLabel>
                        <Select
                          required
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={time}
                          onChange={handleChangeTime}>
                          {arrTime &&
                            arrTime.map((value, index) => (
                              <MenuItem key={index} value={value}>
                                {value}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Col>
                </Row>

                <Row className="rowTableModal pt-3">
                  <Col className="colRightTable">
                    <div className="item">
                      <CssTextField
                        required
                        className={classes.margin}
                        id="custom-css-standard-input"
                        label="Кол-во человек"
                        onChange={handleChangeCount}
                        value={count}
                      />
                    </div>
                  </Col>
                  <Col className="colLeftTable">
                    <div className="item">
                      <CssTextField
                        required
                        className={classes.margin}
                        id="custom-css-standard-input"
                        label="Пожелания"
                        onChange={handleChangeDescription}
                        value={description}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col className="text-center">
                    <div id="checkBox_Confirm">
                      <div id="checkBox">
                        <GreenCheckbox onClick={checkChanger} checked={check} />
                        Согласен на обработку персональных данных *
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="btn_priceInfo">
                  <div>
                    <button onClick={confirmClick} className="btn2">
                      Отправить
                    </button>
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
                          <h2 className="modalConfirmTopText">Ваш столик забронирован!</h2>
                          <p className="modalConfirmDownText">
                            В скором времени мы с вами свяжемся
                          </p>
                        </div>
                      </Fade>
                    </Modal>
                  </div>

                  <Link to="/menu/hookan">
                    <div className="priceInfo">Все цены в разделе меню *</div>
                  </Link>
                </div>
              </Container>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TableModal;
