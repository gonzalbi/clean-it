import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {WelcomeScreen,LoginScreen,RegisterScreen,HomeScreen,IGDAScreen} from './app/screens/index';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='IDGA' screenOptions={{headerShown: false  }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IDGA" component={IGDAScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}