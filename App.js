import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'

const App = createStackNavigator({

  HomeScreen: HomeScreen,
  SearchTabNavigator: SearchTabNavigator
},{

  initialRouteName: "SearchTabNavigator"

})

export default App;

