import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {style} from './style';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const HeaderCustom = ({
  title,
  icon,
  iconCallback,
  actionText,
  actionCallback,
}) => (
  <View style={style.container}>
    <View style={style.containerL}>
      <TouchableWithoutFeedback onPress={iconCallback}>
        <Icon name={icon} size={20} style={style.icon} />
      </TouchableWithoutFeedback>

      <Text style={style.title}>{title}</Text>
    </View>

    <TouchableWithoutFeedback onPress={actionCallback}>
      <Text style={style.action}>{actionText}</Text>
    </TouchableWithoutFeedback>
  </View>
);

HeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconCallback: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  actionCallback: PropTypes.func.isRequired,
};

export default HeaderCustom;
