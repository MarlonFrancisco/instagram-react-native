import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './style';
import PropTypes from 'prop-types';

const ActionsPost = ({handleLike, handleComment, handleSavePost}) => (
  <View style={style.container}>
    <View style={style.containerActionsL}>
      <TouchableWithoutFeedback onPress={handleLike}>
        <Icon name="heart" size={26} color="#000" style={{marginRight: 15}} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleComment}>
        <Icon name="comment" size={26} color="#000" />
      </TouchableWithoutFeedback>
    </View>
    <TouchableWithoutFeedback onPress={handleSavePost}>
      <Icon name="bookmark" size={26} color="#000" />
    </TouchableWithoutFeedback>
  </View>
);

ActionsPost.propType = {
  handleLike: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  handleSavePost: PropTypes.func.isRequired,
};

export default ActionsPost;
