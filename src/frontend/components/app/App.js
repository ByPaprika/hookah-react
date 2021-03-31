import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setNowData } from '../../redux/actions/nowData';

import {
  GaleryPage,
  MainPage,
  MenuPageHookan,
  NewsPage,
  AdminPage,
  MenuPageDrinks,
  MenuPageTea,
} from '../../pages';
import { Footer, Header, YandexMap } from '../';

import '../../css/App.css';
import ScrollToTop from '../ScrollToTop';
import BurgerMenu from '../BurgerMenu';

function App() {
  const dispatch = useDispatch();
  const activeItemHeader = useSelector(({ headerMenu }) => headerMenu.activeItemHeader);

  const smoothToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  React.useEffect(() => {
    const arrDate = [];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let ddNumber = Number(dd);
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    for (let i = 0; i < 7; i++) {
      arrDate.push((today = ddNumber + i + '/' + mm + '/' + yyyy));
    }
    dispatch(setNowData(arrDate));
  }, []);

  return (
    <div>
      <div className="burgerMenuContent">
        <BurgerMenu />
      </div>
      <div className="main-wrapper">
        <Header clickSmooth={smoothToUp} activeItemProp={activeItemHeader} />

        <div className="contentPage">
          <Route path="/" exact>
            <MainPage clickSmooth={smoothToUp} />
          </Route>
          <Route path="/galery" exact>
            <GaleryPage />
          </Route>

          <Route path="/menu/hookan" exact>
            <MenuPageHookan />
          </Route>
          <Route path="/menu/drinks" exact>
            <MenuPageDrinks />
          </Route>
          <Route path="/menu/tea" exact>
            <MenuPageTea />
          </Route>

          <Route path="/news" exact>
            <NewsPage />
          </Route>
          <Route path="/admin" exact>
            <AdminPage />
          </Route>
        </div>
        <YandexMap />

        <Footer clickSmooth={smoothToUp} />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
