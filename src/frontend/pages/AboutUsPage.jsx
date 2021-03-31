import React from 'react';

import { setHeaderItem } from '../redux/actions/headerMenu';
import { GalerySliderWrapper } from '../components';

import { useDispatch } from 'react-redux';
import { TopImg } from '../components';
function AboutUsPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderItem(0));
  }, []);
  return (
    <div className="wrapperAboutUs">
      <GalerySliderWrapper />
    </div>
  );
}

export default AboutUsPage;
