import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default () => (
  <View style={style.container}>
    <View style={style.rowContainer}>
      <Icon name="instagram" size={26} color="#000" style={style.logo} />
      <Image source={require('../../../assets/imgs/logo.png')} />
    </View>

    <TouchableWithoutFeedback onPress={() => {}}>
      <Icon name="paper-plane" size={26} color="#000" />
    </TouchableWithoutFeedback>
  </View>
);
