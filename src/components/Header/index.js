import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default () => (
  <View style={style.container}>
    <View style={style.rowContainer}>
      <Icon name="instagram" size={26} color="#000" style={style.logo} />
      <Text style={style.title}>Marlongram</Text>
    </View>

    <TouchableWithoutFeedback onPress={() => {}}>
      <Icon name="paper-plane" size={26} color="#000" />
    </TouchableWithoutFeedback>
  </View>
);
