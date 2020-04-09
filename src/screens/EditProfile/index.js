import React from 'react';
import HeaderCustom from '../../components/HeaderCustom';
import {
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {style} from './style';
import Photo from './../../components/Photo';

const EditProfile = ({navigation}) => {
  return (
    <ScrollView>
      <HeaderCustom
        title="Editar perfil"
        icon="times"
        iconCallback={() => navigation.navigate('Profile')}
        actionText="Salvar"
        actionCallback={() => {}}
      />

      <View style={style.containerPhoto}>
        <Photo width={80} height={80} />
        <TouchableNativeFeedback onPress={() => {}}>
          <Text style={style.changePhotoText}>Alterar foto do perfil</Text>
        </TouchableNativeFeedback>
      </View>

      <View style={style.containerForm}>
        <TextInput placeholder="Nome" style={style.input} />
        <TextInput placeholder="Username" style={style.input} />
        <TextInput placeholder="Bio" style={style.input} />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
