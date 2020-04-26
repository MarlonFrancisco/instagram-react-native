import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import {style} from './style';
import {ScrollView} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <Image
            source={require('../../../assets/imgs/logo.png')}
            style={style.title}
          />

          <View style={style.containerForm}>
            <TextInput placeholder="Número" style={style.input} />
            <TextInput placeholder="Email" style={style.input} />
            <TextInput placeholder="Usuario" style={style.input} />
            <TextInput placeholder="Senha" style={style.input} />

            <Button style={style.button} title="Avançar" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <View style={style.footer}>
        <Text style={style.titleFooter}>Já tem uma conta?</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text style={style.loginTitle}>Faça login.</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Register;
