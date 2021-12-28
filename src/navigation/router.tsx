/**
 *
 */

import React from 'react';
import HomeScreen from '../screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Cart, Favorite, HomeIcon, Profile} from './../assets';
import Details from '../screen/Details';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarStyle: {height: 55}}}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <HomeIcon />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Favorite />;
          },
        }}
        name="Favorite"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Cart />;
          },
        }}
        name="Cart"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Profile />;
          },
        }}
        name="Profile"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ShoeDetail"
        options={{headerShown: false}}
        component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
