import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerImage: {
    backgroundColor: 'gray',
    height: (Dimensions.get('window').height * 1.5) / 4,
  },
  containerImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageGrid: {
    width: Dimensions.get('window').width / 4,
    height: (((Dimensions.get('window').height * 1.5) / 4) * 2) / 4,
  },
});
