import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HeaderLeft from '../components/header'

import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'
import SignUpPage from '../components/SignUpPage'
import PlaylistPage from '../components/PlaylistPage'
import PlayerPage from '../components/PlayerPage'
import ResearchPage from '../components/ResearchPage'
import HistoryPage from '../components/HistoryPage'

const getProfilCache = async (props) => {
  try {
    let jsonValue = await AsyncStorage.getItem('cache_profile');

    //console.log("profile cache ", jsonValue);

    if (jsonValue) {
      jsonValue = JSON.parse(jsonValue);

      const action = {type: 'REHYDRATE_PROFILE', profile: jsonValue}
      props.dispatch(action);
    }
  } catch(e) {
    console.log("echec store profile ", e);
  }
}

function HomeStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'rgb(200, 200, 200)',
            },
          }}>
          <Stack.Screen 
          name="HomePage" 
          component={HomePage}
          />
          <Stack.Screen 
          name="playlist" 
          component={PlaylistPage}
          />
          <Stack.Screen 
          name="Player" 
          component={PlayerPage}
          />
        </Stack.Navigator>
  );
}

function HomeNavigator() {
    return (
          <Tab.Navigator>
            <Tab.Screen name="Home page" component={HomeStack} />
            <Tab.Screen name="Research" component={ResearchPage} />
            <Tab.Screen name="History" component={HistoryPage} />
          </Tab.Navigator>
      );
  }

function MyStack(props) {

  if (!props.profil.access_token) {
    getProfilCache(props);
  }

  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'rgb(200, 200, 200)',
            },
          }}>
          {
            props.profil.access_token == null ? (
              <>
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
              </>
            ) : (
              <Stack.Screen 
              name="HomeTab" 
              component={HomeNavigator}
              options={{ 
                headerTitle: props => <HeaderLeft {...props} />,
                headerLeft: null }} 
              />
            )
          }
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const mapStateToProps = (state) => {
  return state
}  
export default connect(mapStateToProps)(MyStack);