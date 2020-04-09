/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

const Photo = ({photo, width, height}) => (
  <Image
    style={{width, height, borderRadius: 55}}
    source={photo || require('./../../../assets/imgs/perfil.png')}
  />
);

Photo.propTypes = {
  photo: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Photo;
