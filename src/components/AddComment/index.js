import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback as TWF,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {style} from './style';

const AddComment = ({photo}) => {
  const [state, setState] = useState({
    comment: '',
    editMode: false,
  });

  const hadleAddComment = () => {
    Alert.alert('Adicionado!', state.comment);
  };

  let commentArea = null;

  if (state.editMode) {
    commentArea = (
      <View style={style.container}>
        <TextInput
          placeholder="Comentar..."
          value={state.comment}
          style={style.input}
          autoFocus={true}
          onChangeText={(comment) => setState({...state, editMode: comment})}
          onSubmitEditing={hadleAddComment}
        />
        <TWF onPress={() => setState({...state, editMode: false})}>
          <Icon name="times" color="#555" size={15} />
        </TWF>
      </View>
    );
  } else {
    commentArea = (
      <TWF onPress={() => setState({...state, editMode: true})}>
        <View style={style.container}>
          <Image source={photo} style={style.photo} />
          <Text style={style.caption}>Adicione um commentario...</Text>
        </View>
      </TWF>
    );
  }

  return commentArea;
};

AddComment.protoTypes = {
  photo: PropTypes.string.isRequired,
};

export default AddComment;
