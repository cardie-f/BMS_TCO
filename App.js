import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Home from './app/Screens/HomeScreen/Home';
import { NavigationContainer } from '@react-navigation/native';
import Notification from './app/Screens/NotificationScreen/Notification';
import ChangeOver from './app/Screens/ChangeOverScreens/ChangeOver';
import ChangeOverA from './app/Screens/ChangeOverScreens/ChangeOverA';
import ChangeOverB from './app/Screens/ChangeOverScreens/ChangeOverB';
import ChangeOverAB from './app/Screens/ChangeOverScreens/ChangeOverAB';


const Stack = createStackNavigator();

export default function App() {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener((evt) => {
      const orientation = evt.orientationInfo.orientation;
      if (orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
          orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN) {
        setOrientation('portrait');
      } else if (orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
                 orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
        setOrientation('landscape');
      }
    });
    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ChangeoverA" component={ChangeOverA} />
        <Stack.Screen name="ChangeoverB" component={ChangeOverB} />
        <Stack.Screen name="ChangeoverAB" component={ChangeOverAB} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}


