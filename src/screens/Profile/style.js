import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  containerPerfil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  containerPhoto: {},
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 55,
  },
  containerApresetation: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  buttonEditProfile: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginTop: 20,
  },
  textEditProfile: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  publicationsType: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    padding: 10,
    alignItems: 'center',
  },
  containerImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
});
