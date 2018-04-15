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

class NavCuti extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}> 
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('CutiHome')}>
                        <Text style = {styles.homeText}> Info Cuti</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('RencanaCuti')}>
                        <Text style = {styles.homeText}> Rencana Cuti</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PengajuanCuti')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrackingCuti')}>
                        <Text style = {styles.homeText}> Tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ApprovalCuti')}>
                        <Text style = {styles.homeText}> Approval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('HistoriAbsensiCuti')}>
                        <Text style = {styles.homeText}> Histori Absensi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MonitorAbsensiCuti')}>
                        <Text style = {styles.homeText}> Monitor Absensi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('BlockLeaveCuti')}>
                        <Text style = {styles.homeText}> Block Leave</Text>
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
        fontWeight: "bold",
        fontFamily: 'vincHand'
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
export default withNavigation ( NavCuti );