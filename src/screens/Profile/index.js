import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PerfilInfo from './components/PerfilInfo';
import Photo from '../../components/Photo';

const mock = [
  {
    node: {
      group_name: 'Download',
      image: {
        filename: 'images (5).jpeg',
        height: 270,
        uri: 'file:///storage/emulated/0/Download/images (5).jpeg',
        width: 187,
      },
      timestamp: 0,
      type: 'image/jpeg',
    },
  },
];
const Profile = ({navigation}) => {
  const renderViewDrawer = () => (
    <View>
      <Text>ola mundo!</Text>
    </View>
  );
  return (
    <>
      <View style={style.container}>
        <DrawerLayout
          drawerWidth={200}
          drawerType="front"
          drawerBackgroundColor="#fff"
          drawerPosition="right"
          renderNavigationView={renderViewDrawer}>
          <View style={style.containerHeader}>
            <Text style={style.title}>Marlon_iro</Text>

            <TouchableWithoutFeedback onPress={() => {}}>
              <Icon name="bars" size={26} />
            </TouchableWithoutFeedback>
          </View>

          <View style={style.containerPerfil}>
            <View style={style.containerPhoto}>
              <Photo width={70} height={70} />
              <TouchableWithoutFeedback onPress={() => {}}>
                <Icon
                  name="plus-circle"
                  color="#4dabf7"
                  size={22}
                  style={style.icon}
                />
              </TouchableWithoutFeedback>
            </View>

            <PerfilInfo number={7} text="Publicaçoes" />
            <PerfilInfo number={57} text="Seguidores" />
            <PerfilInfo number={44} text="Seguindo" />
          </View>

          <View style={style.containerApresetation}>
            <Text style={style.name}>Marlon</Text>
            <Text style={style.description}>Vicios e virtude</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={style.buttonEditProfile}>
              <Text style={style.textEditProfile}>Editar perfil</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={style.publicationsType}>
            <View>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Icon name="grip-horizontal" size={30} />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <ScrollView>
            <View style={style.containerImages}>
              {mock.map((item, index) => (
                <TouchableOpacity onPress={() => {}} key={index}>
                  <Image source={item.node.image} style={style.image} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </DrawerLayout>
      </View>
    </>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
