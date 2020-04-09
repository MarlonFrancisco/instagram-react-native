/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {style} from './style';
import PropTypes from 'prop-types';

const Comments = ({comments, handleShowComments}) => {
  let view = [];

  if (comments.length) {
    for (let index = 0; index <= 1; index++) {
      view.push(
        <View style={style.commentContainer} key={index}>
          <Text style={style.nickname}>{comments[index].nickname}</Text>
          <Text style={style.comment}>{comments[index].comment}</Text>
        </View>,
      );
    }
  }

  return (
    <View style={{...style.container, margin: comments.length ? 10 : 0}}>
      {view}

      {comments.length > 2 && (
        <TouchableWithoutFeedback onPress={handleShowComments}>
          <Text style={style.messageShowComments}>
            Ver todos os {comments.length} comentários
          </Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      nickname: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleShowComments: PropTypes.func.isRequired,
};
export default Comments;
