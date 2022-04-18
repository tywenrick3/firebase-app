import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FitnessScreen from '../screens/FitnessScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {AntDesign} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 30,
          right: 30,
          elevation: 0,
          backgroundColor: '#c4c4c4',
          opacity: 70,
          borderRadius: 10,
          height: 60,
          shadowColor: '#000000',
          shadowOpacity: 0.06,
          shadowOffset: {width: 5, height: 5},
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Image
                source={<AntDesign name="home" size={24} color="black" />}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7b876d' : '#000000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Fitness"
        component={FitnessScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Image
                source={<Ionicons name="fitness" size={24} color="black" />}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7b876d' : '#000000',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
