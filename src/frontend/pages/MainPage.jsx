import React from 'react';
import { setHeaderItem } from '../redux/actions/headerMenu';
import { setRefEvent } from '../redux/actions/refEvent';
import { useDispatch, useSelector } from 'react-redux';

import {
  AboutSection,
  MenuSection,
  NewsSection,
  EventSection,
  EventRequestSection,
  TopImg,
} from '../components';

function MainPage({ clickSmooth }) {
  const dispatch = useDispatch();
  const ref = useSelector(({ refEvent }) => refEvent.ref);
  const smoothToEventSelector = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end',
    });
  const myRef = React.useRef();

  React.useEffect(() => {
    dispatch(setHeaderItem(null));
    dispatch(setRefEvent(myRef));
  }, []);

  return (
    <div className="wrapperMainPage ">
      <TopImg smoothToEventSelectorProp={smoothToEventSelector} />
      <AboutSection smoothProp={clickSmooth} />

      <MenuSection smoothProp={clickSmooth} />

      <EventSection smoothToEventSelectorProp={smoothToEventSelector} />
      <div ref={myRef}>
        <EventRequestSection />
      </div>
    </div>
  );
}

export default MainPage;
