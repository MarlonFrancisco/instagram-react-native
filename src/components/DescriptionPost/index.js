import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';
import PropTypes from 'prop-types';

const DescriptionPost = ({author, description}) => (
  <View style={style.container}>
    <Text style={style.description}>
      <Text style={style.author}>{author}</Text> {description}
    </Text>
  </View>
);

DescriptionPost.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DescriptionPost;
