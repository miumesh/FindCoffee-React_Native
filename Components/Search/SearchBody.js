import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';




class SearchBody extends Component{
    
    render(){
         
        return(
            <View >
                <View><Text> {this.props.coffeeData.name} </Text></View>
            </View>

        );
    }
}


export default SearchBody;