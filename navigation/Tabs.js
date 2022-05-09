import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FitnessScreen from '../screens/FitnessScreen';
import ClockScreen from '../screens/ClockScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AddUpdate from '../screens/AddUpdate';
IonIcon.loadFont();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = 30;
          if (route.name === 'Home') {
            iconName = focused
              ? 'person-circle-outline'
              : 'person-circle-outline';
          } else if (route.name === 'Fitness') {
            iconName = focused ? 'md-analytics' : 'md-analytics';
          } else if (route.name === 'Clock') {
            iconName = focused ? 'md-alarm' : 'md-alarm';
          } else if (route.name == 'Add') {
            iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
          }
          return <IonIcon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#A0ED7B',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Clock" component={ClockScreen} />
      <Tab.Screen name="Fitness" component={FitnessScreen} />
      <Tab.Screen name="Add" component={AddUpdate} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
