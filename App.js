import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { welcome } from 'react-native';
import WelcomeSceen from './app/screens/WelcomeSceen';

export default function App() {
  console.log('App started')
  return (
    <WelcomeSceen></WelcomeSceen>
  );
}