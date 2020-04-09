import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const PerfilInfo = ({number, text}) => (
  <View style={style.containerPerfilInformations}>
    <Text style={style.number}>{number}</Text>
    <Text style={style.fieldInfo}>{text}</Text>
  </View>
);

const style = StyleSheet.create({
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerPerfilInformations: {
    alignItems: 'center',
  },
});

PerfilInfo.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default PerfilInfo;
