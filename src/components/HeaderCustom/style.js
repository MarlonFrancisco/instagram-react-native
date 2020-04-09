import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#d4d4d4',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerL: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginLeft: 20,
  },
  action: {
    color: 'blue',
    fontSize: 16,
  },
});
