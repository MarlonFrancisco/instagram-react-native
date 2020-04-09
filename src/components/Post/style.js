import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});
