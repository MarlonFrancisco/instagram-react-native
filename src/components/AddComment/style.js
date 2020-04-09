import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 14,
    color: '#CCC',
  },
  input: {
    width: '90%',
  },
  photo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 50,
  },
});
