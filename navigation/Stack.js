import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FitnessScreen from '../screens/FitnessScreen';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Tabs"
        options={{headerShown: false}}
        component={Tabs}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;
