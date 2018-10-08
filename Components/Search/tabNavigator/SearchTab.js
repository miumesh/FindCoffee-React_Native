import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Keyboard } from 'react-native';
import {Container, Content} from 'native-base'

import SearchHeader from '../SearchHeader'
import axios from 'axios';
import SearchBody from '../SearchBody';


class SearchTab extends Component{ 
    state = {
        searchCoffee: '',
        coffeeData: {},
        coffeeFound: false
        }
    coffeeSearch = () =>{
        Keyboard.dismiss()
        const coffeeName = this.state.searchCoffee.toLowerCase();
        const query = `https://api.brewerydb.com/v2/search?q=` + coffeeName + `&type=beer& key=2e97681b46666b733eaf24a940bc7e85`

        axios.get(query)
            .then((response) => {
                var data = response.data.data[0] ? response.data.data[0] : false
                console.log(data)

                if (data){
                    this.setState({
                        coffeeData: data,
                        coffeeFound: true

                    })
                }
                       
            }).catch((error) => {

                this.setState({
                    coffeeData: flase
                })
            })
    }

    static navigationOptions = {
        header: null        
    }
    
    renderContent = () =>{
        
        if(this.state.coffeeFound){
            return <SearchBody coffeeData={this.state.coffeeData}/>
        }
        else
        {
            alert("Coffee not found")
        }

    }
    render(){
         
        return(
            <Container>
                <SearchHeader
                    value = {this.state.searchCoffee}
                    onChangeText={(searchCoffee) => this.setState({searchCoffee})}
                    coffeeSearch = {this.coffeeSearch}
                />
                <Content>

                    {this.renderContent()}


                </Content>
            </Container>

        );
    }
}


export default SearchTab;