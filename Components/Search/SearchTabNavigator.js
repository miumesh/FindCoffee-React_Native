import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';

import {createBottomTabNavigator } from 'react-navigation'
import SearchTab from './tabNavigator/SearchTab'
import FavouritesTab from './tabNavigator/FavouritesTab'

// var {navigate} = this.props.navigation;
const  SearchTabNavigator = createBottomTabNavigator ({
    SearchTab: SearchTab,
    FavouritesTab: FavouritesTab
  },{
        
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return(

                <Footer>
                    <FooterTab>
                        <Button vertical
                                active = {props.navigation.state.index === 0}
                                onPress={() => props.navigation.navigate('SearchTab')}   >
                            <Icon name= "cafe" />
                            <Text> Search </Text>

                        </Button>
                        <Button vertical
                                active = {props.navigation.state.index === 1}
                                onPress={() => props.navigation.navigate('FavouritesTab')}  >
                            <Icon name= "star" />
                            <Text> Favourites </Text>
                        </Button>
                    </FooterTab>
                </Footer>

            );}     
  })

  export default SearchTabNavigator;