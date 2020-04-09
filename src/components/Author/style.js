import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchable: {
    padding: 10,
    borderRadius: 15,
  },
  nickname: {
    color: '#444',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  overlayModal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000066',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'column',
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  link: {
    color: '#000',
    fontSize: 16,
    borderRadius: 0,
    padding: 10,
  },
});
