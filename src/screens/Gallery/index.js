import React, {useState, useEffect, useCallback} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {style} from './style';
import CameraRoll from '@react-native-community/cameraroll';
import HeaderCustom from '../../components/HeaderCustom';
import PropTypes from 'prop-types';

const Gallery = ({navigation}) => {
  const [state, setState] = useState({
    image: null,
    imagesFromGallery: [],
  });

  useEffect(() => {
    getImagesFromGallery();
  }, []);

  const getImagesFromGallery = () => {
    CameraRoll.getPhotos({
      first: 20,
    }).then((res) => {
      const images = res.edges;
      setState((prevState) => ({
        ...prevState,
        imagesFromGallery: [...images],
        image: images[0] || null,
      }));
    });
  };

  const handleSelectImage = useCallback((image) => {
    setState((prevState) => ({
      ...prevState,
      image,
    }));
  }, []);

  return (
    <View style={style.container}>
      <HeaderCustom
        title="Galeria"
        icon="times"
        iconCallback={() => navigation.navigate('Feed')}
        actionText="Avançar"
        actionCallback={() =>
          navigation.navigate('SendPost', {
            image: state.image,
          })
        }
      />

      <View style={style.containerImage}>
        {state.image && (
          <Image
            source={{uri: state.image.node.image.uri}}
            style={style.image}
          />
        )}
      </View>

      <ScrollView>
        <View style={style.containerImages}>
          {state.imagesFromGallery.map(({node}, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectImage({node})}>
              <Image source={{uri: node.image.uri}} style={style.imageGrid} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

Gallery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Gallery;
