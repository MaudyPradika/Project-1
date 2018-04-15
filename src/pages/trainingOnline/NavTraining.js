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

class NavTraining extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}> 
                <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('InformasiTraining')}>
                        <Text style = {styles.homeText}> Informasi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('PengajuanTraining')}>
                        <Text style = {styles.homeText}> Pengajuan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ValidasiPesera')}>
                        <Text style = {styles.homeText}> Validasi Peserta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('ApprovalTraining')}>
                        <Text style = {styles.homeText}> Approval Training</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrackingTraining')}>
                        <Text style = {styles.homeText}> Tracking Training</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('EksternalTraining')}>
                        <Text style = {styles.homeText}> Eksternal/FP3E Training</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('SertifikasiTraining')}>
                        <Text style = {styles.homeText}> Sertifikasi Training</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrainingHistory')}>
                        <Text style = {styles.homeText}> Training History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('AdminTraining')}>
                        <Text style = {styles.homeText}> Admin Training</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('AdminMenuTraining')}>
                        <Text style = {styles.homeText}> Admin Menu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TrainingCatalogTree')}>
                        <Text style = {styles.homeText}> Training Catalog Tree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('SMRTraining')}>
                        <Text style = {styles.homeText}> SMR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('AAJITraining')}>
                        <Text style = {styles.homeText}> AAJI</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('WAPERDTraining')}>
                        <Text style = {styles.homeText}> WAPERD</Text>
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
export default withNavigation ( NavTraining );