import React from 'react';

class YandexMap extends React.Component {
  render() {
    return (
      <div className="wrapperGoogleMap">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2af018d5fcb1e75547ba387afaf8b1fd575e2ce9930f9c29cd42f1175ea84fe&amp;source=constructor"
          width="100%"
          height="300"
          frameBorder="0"></iframe>
      </div>
    );
  }
}
export default YandexMap;
