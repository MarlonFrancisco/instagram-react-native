import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Button, Image} from 'react-native';
import {style} from './style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <>
      <View style={style.container}>
        <Image
          source={require('../../../assets/imgs/logo.png')}
          style={style.title}
        />

        <View style={style.containerForm}>
          <TextInput style={style.input} placeholder="Email" />
          <TextInput style={style.input} placeholder="Password" />

          <Button
            title="Entrar"
            onPress={() => navigation.navigate('Home')}
            style={style.button}
          />
        </View>

        <View style={style.containerRegister}>
          <Text style={style.registerTitle}>Não tem uma conta? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Text style={style.registerLink}>Cadastre-se</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={style.footer}>
        <Text style={style.titleFooter}>Instagram do Marlon</Text>
      </View>
    </>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
