import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native';
import Toolbar from '../../lib/Toolbar'
import NavCuti from './NavCuti'

class CutiHome extends Component {
    
    render() {
        return (
            <View style = {styles.container}>
            <Toolbar/>
            <NavCuti/>
            
                <View style = {styles.homeContainer}>

                    <ScrollView>
                    <View style = {styles.containerText }>
                   
                    <Text style={{ fontSize: 18, color: 'blue'}}>
                    Perubahan Tanggal Cuti Block Leave
                    </Text>

                    <Text style={{fontSize: 15 }}>
                    1. Karyawan dapat merubah pelaksanaan tanggal block leave yang sudah diajukan sebelumnya dengan memilih type cuti pembatalan tanggal block leave.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    2. Perubahan tanggal block leave maksimal 3 bulan dari tanggal pengajuan awal atau maksimal tanggal 31 Desember tahun berjalan. 
                    </Text>
                    
                    <Text style={{ fontSize: 18, color: 'blue' }}>
                    Cuti Day In Lieu Lembur
                    </Text>
                    <Text style={{fontSize: 15}}>
                    1. Pengambilan hak Day in Lieu lembur dapat digunakan sebelum tanggal 31 Desember setiap tahunnya. Hak Day in Lieu lembur yang belum diambil sampai dengan akhir tahun berjalan akan gugur.
                    </Text>
                    <Text style={{fontSize: 15}}>
                    2. Hak Day in Lieu lembur tidak dapat digunakan sebagai bagian dari block leave.
                    </Text>
                    <Text style={{fontSize: 15}}>
                    3. Day in lieu lembur tidak diperhitungkan dalam perhitungan sisa cuti ketika terjadi pemutusan hubungan kerja.
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
        flex:1,
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
        paddingTop: 15,
    },
    
    }
)
export default CutiHome;