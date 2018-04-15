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

class NavPinjaman extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Informasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Pelunasan Pinjaman</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Simulasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Admin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PinjamanOnlineHome')}>
                        <Text style = {styles.homeText}> Penyimpangan</Text>
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
        backgroundColor:'#FFDAB9',
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
        borderWidth: 1,
        borderColor:'yellow',
        borderRadius: 10,
    },
    
    }
)
export default withNavigation ( NavPinjaman );