import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
} from 'react-native';

import {
    withNavigation
  } from 'react-navigation';

class NavTravel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}> 
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ETravelHome')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ETravelHome')}>
                        <Text style = {styles.homeText}> Tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ETravelHome')}>
                        <Text style = {styles.homeText}> Report</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ETravelHome')}>
                        <Text style = {styles.homeText}> Data Master</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }}
    

const styles = StyleSheet.create({
   
    Container : {
        height : 65,
        backgroundColor: '#b2bec3',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'gray',
        backgroundColor: 'skyblue'
    },

    iconContainer: {
        height: 55,
        width : 'auto',
        flexDirection: "row",
        justifyContent:'space-around',  
        backgroundColor:'teal',
        borderWidth: 4,
        borderColor:'gray', 
        
    },  
    homeText:{
        fontSize: 20, 
        fontWeight : "bold"
    },

    button : {
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginHorizontal: 8,
        paddingHorizontal: 15,
        borderWidth: 3,
        borderColor:'yellow',
    },
    
    }
)
export default withNavigation ( NavTravel );