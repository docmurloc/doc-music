import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import { View, Text } from 'react-native';
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: 'Welcome'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;