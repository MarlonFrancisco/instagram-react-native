/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableHighlight, Modal} from 'react-native';
import {style} from './style';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Photo from '../Photo';

const Touchable = ({children, onPress}) => (
  <TouchableHighlight
    underlayColor="#0000006b"
    style={{...style.touchable, borderRadius: 0}}
    onPress={onPress}>
    {children}
  </TouchableHighlight>
);
const Author = ({email, nickname}) => {
  const [isVisibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <Photo width={45} height={45} />
          <Text style={style.nickname}>{nickname}</Text>
        </View>
        <TouchableHighlight
          underlayColor="#0000006b"
          style={style.touchable}
          onPress={() => setVisibleModal(true)}>
          <Icon name="ellipsis-v" size={22} color="#000" />
        </TouchableHighlight>
      </View>

      <Modal
        visible={isVisibleModal}
        animated
        transparent
        animationType="fade"
        onRequestClose={() => setVisibleModal(false)}>
        <View
          style={style.overlayModal}
          onTouchStart={() => setVisibleModal(false)}></View>
        <View style={style.centeredContainer}>
          <View style={style.modalContainer}>
            <Touchable onPress={() => {}}>
              <Text style={style.link}>Denuncie...</Text>
            </Touchable>

            <Touchable onPress={() => {}}>
              <Text style={style.link}>Ativar notificações de publicação</Text>
            </Touchable>

            <Touchable onPress={() => {}}>
              <Text style={style.link}>Copiar link</Text>
            </Touchable>

            <Touchable onPress={() => {}}>
              <Text style={style.link}>Compartilhar em...</Text>
            </Touchable>

            <Touchable onPress={() => {}}>
              <Text style={style.link}>Deixar de seguir</Text>
            </Touchable>

            <Touchable onPress={() => {}}>
              <Text style={style.link}>Silenciar</Text>
            </Touchable>
          </View>
        </View>
      </Modal>
    </>
  );
};

Author.propTypes = {
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default Author;
