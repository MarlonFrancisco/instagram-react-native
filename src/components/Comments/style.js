import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 2,
    paddingLeft: 10,
    borderLeftColor: "gray"
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginRight: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
    fontSize: 14,
  },
  messageShowComments: {
    color: 'gray',
    marginTop: 5,
  },
});
