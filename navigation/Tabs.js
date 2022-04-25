import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FitnessScreen from '../screens/FitnessScreen';
import ClockScreen from '../screens/ClockScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AntDesign} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fitness" component={FitnessScreen} />
      <Tab.Screen name="Clock" component={ClockScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
