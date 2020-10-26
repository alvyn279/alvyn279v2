import React from 'react';
import $ from 'jquery';

class Preloader extends React.Component {
  componentDidMount() {
    $(window).on('load', () => {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', () => {
          $(this).remove();
        });
      }
    });
  }

  render() {
    return <div id={'preloader'} />;
  }
}

export default Preloader;
