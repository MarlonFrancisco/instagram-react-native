import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  title: {
    marginBottom: 25,
  },
  containerForm: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    borderRadius: 4,
    padding: 15,
  },
  footer: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  titleFooter: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  containerRegister: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerTitle: {
    color: 'gray',
  },
  registerLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
