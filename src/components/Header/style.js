import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    fontSize: 24,
  },
  logo: {
    marginRight: 10,
  },
});
