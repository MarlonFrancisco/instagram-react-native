import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default ({children}) => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarVisible: !['Gallery', 'SendPost', 'EditProfile'].includes(
        route.name,
      ),
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = 'home';
        } else if (route.name === 'Search') {
          iconName = 'search';
        } else if (route.name === 'Activity') {
          iconName = 'heart';
        } else if (route.name === 'Gallery') {
          iconName = 'plus-square';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
        return (
          <Icon name={iconName} solid={focused} size={size} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      showLabel: false,
    }}>
    {children}
  </Tab.Navigator>
);
