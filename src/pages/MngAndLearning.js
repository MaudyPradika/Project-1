import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



class MngAndLearning extends Component {
    constructor(props){
        super(props)

        this.state = {
            //people: this.props.navigation.state.params.people,
        };
    }
    render() {

        

        return (
                <View style = {styles.container}>
                    
                    <Text> {this.props.navigation.state.params.name} </Text>
                    <Text> First person {this.props.navigation.state.params.people[0].username} is {this.props.navigation.state.params.people[0].age} years old</Text>
                    <Text> Second person {this.props.navigation.state.params.people[1].username} is {this.props.navigation.state.params.people[1].age} years old</Text>
                </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bkground : {
        backgroundColor: 'transparent',
        flexGrow: 1,
        position: 'absolute',
        width: 350,
        height: 135,
        justifyContent: 'center',
        alignContent:'center'


    }
    
    }
)
export default MngAndLearning;