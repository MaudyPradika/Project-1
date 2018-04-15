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

class NavLembur extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}> 
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('LemburHome')}>
                        <Text style = {styles.homeText}> Informasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PengajuanLembur')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ApprovalLembur')}>
                        <Text style = {styles.homeText}> Approval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrackingLembur')}>
                        <Text style = {styles.homeText}> Tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ReportingLembur')}>
                        <Text style = {styles.homeText}> Reporting</Text>
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
export default withNavigation ( NavLembur );