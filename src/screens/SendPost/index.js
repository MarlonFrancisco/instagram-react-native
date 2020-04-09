import React from 'react';
import {View, Image, TextInput} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom';
import PropTypes from 'prop-types';
import {style} from './style';

const SendPost = ({navigation, route}) => {
  return (
    <View>
      <HeaderCustom
        title="Legenda"
        icon="arrow-left"
        iconCallback={() => navigation.navigate('Gallery')}
        actionText="Compartilhar"
        actionCallback={() => {}}
      />

      <View style={style.containerForm}>
        <Image
          source={{uri: route.params.image.node.image.uri}}
          style={style.image}
        />
        <TextInput placeholder="Escreba uma legenda..." style={style.input} />
      </View>
    </View>
  );
};

SendPost.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      image: PropTypes.shape({
        node: PropTypes.object.isRequired,
      }),
    }),
  }),
};

export default SendPost;
