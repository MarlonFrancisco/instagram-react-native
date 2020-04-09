import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {style} from './style';
import Author from '../Author';
import AddComment from '../AddComment';
import Comments from '../Comments';
import ActionsPost from '../ActionsPost';
import DescriptionPost from '../DescriptionPost';
const Post = ({image, comments, email, nickname, photo, description}) => {
  const handleLike = useCallback(() => {}, []);
  const handleComment = useCallback(() => {}, []);
  const handleSavePost = useCallback(() => {}, []);
  const handleShowComments = useCallback(() => {}, []);
  return (
    <View style={style.container}>
      <Author email={email} nickname={nickname} />
      <Image source={image} style={style.image} />
      <ActionsPost
        handleLike={handleLike}
        handleComment={handleComment}
        handleSavePost={handleSavePost}
      />
      {description ? (
        <DescriptionPost author={nickname} description={description} />
      ) : null}
      {comments.length ? (
        <Comments comments={comments} handleShowComments={handleShowComments} />
      ) : null}
      <AddComment
        photo={photo || require('./../../../assets/imgs/perfil.png')}
      />
    </View>
  );
};

Post.propTypes = {
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      nickname: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  description: PropTypes.string,
};

export default Post;
