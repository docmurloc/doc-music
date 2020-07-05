import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HeaderLeft from '../components/header'

import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'
import SignUpPage from '../components/SignUpPage'
import PlaylistPage from '../components/PlaylistPage'

function HomeStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'rgb(200, 200, 200)',
            },
          }}>
          <Stack.Screen 
          name="Home" 
          component={HomeStack}
          options={{ 
            headerTitle: props => <HeaderLeft {...props} />,
            headerLeft: null }} 
          />
          <Stack.Screen 
          name="playlist" 
          component={PlaylistPage}
          options={{ 
            headerTitle: props => <HeaderLeft {...props} />,
            headerLeft: null }} 
          />
        </Stack.Navigator>
  );
}

function HomeNavigator() {
    return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="playlist" component={PlaylistPage} />
          </Tab.Navigator>
      );
  }

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'rgb(200, 200, 200)',
            },
          }}>
          <Stack.Screen 
          name="Login" 
          component={LoginPage}
          options={{ 
            headerTitle: props => <HeaderLeft {...props} />,
            headerLeft: null,
            }} 
          />
          <Stack.Screen 
          name="SignUp" 
          component={SignUpPage}
          options={{ 
            headerTitle: props => <HeaderLeft {...props} />,
            headerLeft: null,
            }} 
          />
          <Stack.Screen 
          name="Home" 
          component={HomeNavigator}
          options={{ 
            headerTitle: props => <HeaderLeft {...props} />,
            headerLeft: null }} 
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;