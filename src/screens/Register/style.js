import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    marginBottom: 15,
    padding: 10,
  },
  containerForm: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 4,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleFooter: {
    color: 'gray',
    marginRight: 5,
  },
  loginTitle: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
