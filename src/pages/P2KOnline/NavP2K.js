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

class NavP2K extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}> 
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('P2KOnlineHome')}>
                        <Text style = {styles.homeText}> Informasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PengajuanP2K')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ApprovalP2K')}>
                        <Text style = {styles.homeText}> Approval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('HistoriP2K')}>
                        <Text style = {styles.homeText}> Histori Approval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrackingP2K')}>
                        <Text style = {styles.homeText}> Tracking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('AdminP2K')}>
                        <Text style = {styles.homeText}> Admin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ExternalScoreP2K')}>
                        <Text style = {styles.homeText}> External Score</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ArsipP2K')}>
                        <Text style = {styles.homeText}> Arsip</Text>
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
export default withNavigation ( NavP2K );