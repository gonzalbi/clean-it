import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {WelcomeScreen,LoginScreen,RegisterScreen,HomeScreen,IGDAScreen,CapacitacionesScreen,EntregaEPPScreen,CalendarScreen} from './app/screens/index';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const MyTheme = {
  dark : true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(51, 51, 51)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(249, 244, 245)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <NavigationContainer  theme={MyTheme}>
      <Stack.Navigator initialRouteName='IDGA' screenOptions={{headerShown: true,headerStyle:{ backgroundColor: '#0c1713'},  }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IDGA" component={IGDAScreen} />
        <Stack.Screen name='Capacitaciones' component={CapacitacionesScreen} />
        <Stack.Screen name='Entrega y EPP' component={EntregaEPPScreen} />
        <Stack.Screen name='Calendario' component={CalendarScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}