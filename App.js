import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from './src/screens/Feed';
import TabNavigator from './src/TabNavigator';
import Gallery from './src/screens/Gallery';
import SendPost from './src/screens/SendPost';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => (
  <TabNavigator>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Search" component={Feed} />
    <Tab.Screen name="Gallery" component={Gallery} />
    <Tab.Screen name="Activity" component={Feed} />
    <Tab.Screen name="Profile" component={Profile} />
  </TabNavigator>
);
export default () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#dedede" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SendPost" component={SendPost} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
