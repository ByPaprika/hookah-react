import React from 'react';
import PropTypes from 'prop-types';
import '../css/TopImg.css';

import TableModal from './TableModal';
function TopImg({ smoothToEventSelectorProp }) {
  return (
    <div className="TopImgWrapper">
      <div className="divEmpty"></div>
      <div className="tablesModals text-center">
        <div className="tableModal">
          <TableModal />
        </div>

        <div className="tableModal">
          <button onClick={smoothToEventSelectorProp} className="btnMy">
            ЗАБРОНИРОВАТЬ МЕРОПРИЯТИЕ
          </button>
        </div>
      </div>
    </div>
  );
}
TableModal.propTypes = {
  smoothToEventSelectorProp: PropTypes.func,
};

export default TopImg;
