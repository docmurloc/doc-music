import React from 'react';
import {Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HeaderLeft from '../components/header';

import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import SignUpPage from '../components/SignUpPage';
import PlaylistPage from '../components/PlaylistPage';
import PlayerPage from '../components/PlayerPage';
import ResearchPage from '../components/ResearchPage';
import HistoryPage from '../components/HistoryPage';
import FirstPage from '../components/Firstpage';
import ForYouPage from '../components/ForYouPage';
import BrowsePage from '../components/BrowsePage';
import AlbumPage from '../components/AlbumPage';
import TrackPage from '../components/TrackPage';

const getProfilCache = async (props) => {
  try {
    let jsonValue = await AsyncStorage.getItem('cache_profile');

    if (jsonValue) {
      jsonValue = JSON.parse(jsonValue);

      const action = {type: 'REHYDRATE_PROFILE', profile: jsonValue};
      props.dispatch(action);
    }
  } catch (e) {
    console.log('echec store profile ', e);
  }
};

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(200, 200, 200)',
        },
      }}>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="AlbumPage" component={AlbumPage} options={{headerShown: false}}/>
      <Stack.Screen name="TrackPage" component={TrackPage} options={{headerShown: false}}/>
      <Stack.Screen name="playlist" component={PlaylistPage} options={{headerShown: false}}/>
      <Stack.Screen name="Player" component={PlayerPage} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        const iconStyle = {
          width: size,
          height: size,
          resizeMode: 'contain',
        }

        //console.log("route ", route);
        //console.log("Focused ", focused);
        //console.log("color ", color);
        //console.log("size ", size);

        if (route.name === 'Library') {
          return (
            <Image
            source={require('../Images/library.png')}
            style={iconStyle}
            />
          )
        } else if (route.name === 'For you') {
          return (
            <Image
            source={require('../Images/forYou.png')}
            style={iconStyle}
            />
          )
        } else if (route.name === 'Browse') {
          return (
            <Image
            source={require('../Images/browse.png')}
            style={iconStyle}
            />
          )
        } else if (route.name === 'Search') {
          return (
            <Image
            source={require('../Images/search.png')}
            style={iconStyle}
            />
          )
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: 'rgba(250, 248, 240, 1)',
      }
    }}
    >
      <Tab.Screen name="Library" component={HomeStack} />
      <Tab.Screen name="For you" component={ForYouPage} />
      <Tab.Screen name="Browse" component={BrowsePage} />
      <Tab.Screen name="Search" component={ResearchPage} />
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
        {props.profil.access_token == null ? (
          <>
            <Stack.Screen
              name="first"
              component={FirstPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen
            name="HomeTab"
            component={HomeNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(MyStack);
