import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView,
} from 'react-native';
import Toolbar from '../../lib/Toolbar'
import NavTraining from './NavTraining'

class TrainingHome extends Component {
    //state={text:this.props.navigation.state.params.text}
    render() {
        return (
            <View style = {styles.container}>
            <Toolbar/>
            <NavTraining/>
    
                <View style = {styles.homeContainer}>
                <ScrollView>
                    <Image style={styles.logo1} source = {require ('../../images/training.jpg')} />
                    <View style = {styles.containerText }>
                   
                    <Text style={{ fontSize: 15}}>
                    Training Online adalah Aplikasi yang digunakan oleh karyawan BII untuk melakukan registrasi dan tracking pelatihan.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    Ada dua metode Registrasi Peserta Pelatihan:
                    </Text>
                    <Text style={{fontSize: 15, fontWeight:'bold'}}>
                    1. Self Nomination
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Karyawan dapat langsung mendaftarkan diri menjadi peserta pelatihan setelah memilih jadwal pelatihan yang diinginkan.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Pendaftaran ini akan dilakukan validasi oleh admin Pelatihan.
                    </Text>
                    
                    <Text style={{fontSize: 15, fontWeight:'bold'}}>
                    2. By Invitation
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Karyawan diundang oleh Admin Pelatihan untuk menjadi peserta pada pelatihan tertentu.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Pelatihan eksternal menggunakan metode ini. 
                      Setelah karyawan mengisi dan mendapat approval FP3E, maka admin pelatihan akan melakukan proses pendaftaran pelatihan dan mengirimkan unadangan pelatihan.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Karyawan dapat melakukan konfirmasi untuk menyetujui atau menolak menjadi peserta pelatihan tersebut.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    - Bagi karyawan yang tidak diundang, dapat menghubungi admin pelatihan untuk informasi lebih lanjut mengenai pelatihan tersebut.
                    </Text>

                    </View>
                    </ScrollView>
                    
                </View>
            </View>
        )
    }}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',    
    },
    homeContainer: {
        flex: 1,
        backgroundColor: "#ffff", 
    },  
    homeText:{
        borderRightWidth: 1,
        borderLeftWidth: 1, 
        fontSize: 20, 
        
    },
    containerText: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 5,
    },
    logo1 : {
        width: 'auto',
        height: 190,
        resizeMode:'contain'
    },
    }
)
export default TrainingHome;