import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {Header,Item, Icon, Input} from 'native-base'




class SearchHeader extends Component{
    
    render(){         
        return(
            <Header
                style= {{height: 80}} 
                searchBar 
                rounded >
            <Item>
                <Icon name="ios-search"/>
                <Input
                    placeholder = "Search Coffee"
                    onChangeText = {this.props.onChangeText}
                    returnKeyType = 'search'
                    onSubmitEditing = {this.props.coffeeSearch}                
                />
            </Item>
            </Header>
        );
    }
}


export default SearchHeader;