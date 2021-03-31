import React from 'react';

import { setHeaderItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
import { NewsSection } from '../components';
function News() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderItem(2));
  }, []);
  return (
    <div className="wrapperNews">
      <NewsSection />
    </div>
  );
}

export default News;
