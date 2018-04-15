import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Toolbar from '../../lib/Toolbar'
import NavLembur from './NavLembur'
class LemburHome extends Component {
    state={text:this.props.navigation.state.params.text}
    render() {
        return (
            <View style ={styles.Container}> 
            <Toolbar text={this.state.text}/>
              <NavLembur/>
              <ScrollView>
                <View style = {styles.containerText }>
                   
                    <Text style={{ fontSize: 18, color: 'blue'}}>
                    Ketentuan Pengajuan Lembur
                    </Text>

                    <Text style={{fontSize: 15 }}>
                    1. Pengajuan lembur wajib dilakukan dan disetujui oleh atasan langsung adalah paling lambat 7 hari kalender (H-7) sebelum pelaksanaan lembur. Diluar itu pengajuan lembur otomatis dibatalkan.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    2. Pengajuan lembur wajib disetujui oleh Pimpinan Unit Kerja adalah paling lambat 4 hari kalender (H-4) sebelum pelaksanaan lembur. Diluar itu pengajuan lembur otomatis dibatalkan.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    3. Pengajuan lembur setelah H-7 dapat menggunakan Memo yang disetujui oleh Pimpinan Unit Kerja. Dan karyawan mengajukan Lembur tersebut melalui Aplikasi Lembur Online dengan mengupload memo yang telah disetujui.
                    </Text>
                    <Text style={{fontSize: 15 }}>
                    4. Atasan langsung wajib melakukan konfirmasi terhadap pelaksanaan Lembur maksimal H+5 setelah hari lembur dilaksanakan atau setelah diapprove oleh Pimpinan Unit Kerja apabila sudah melewati hari pelaksanaan lembur. Diluar itu pengajuan lembur otomatis dibatalkan.
                    </Text>

                    <Text style={{ fontSize: 18, color: 'blue' }}>
                    Cuti Day In Lieu Lembur
                    </Text>
                    <Text style={{fontSize: 15}}>
                    1. Efektif per tgl 1 Januari 2018, khusus Band BG49 keatas yang menjalankan lembur = 6 jam di hari libur atau hari raya (lembur yang dijalankan sejak tanggal 01 Januari 2018) dapat dikompensasikan dengan cuti day in lieu lembur.
                    </Text>
                    <Text style={{fontSize: 15}}>
                    2. Permohonan pengambilan hak Day in lieu lembur harus diajukan secara online melalui aplikasi `Cuti/Ketidakhadiran` di MyHR2u dan harus diambil seluruhnya sebelum tanggal 31 Desember setiap tahunnya. Hak Day in lieu lembur yang belum diambil sampai dengan akhir tahun berjalan akan gugur.
                    </Text>
                    <Text style={{fontSize: 15}}>
                    3. Hak Day in lieu lembur tidak dapat digunakan sebagai bagian dari block leave.
                    </Text>
                    <Text style={{fontSize: 15}}>
                    4. Sisa Day in lieu lembur tidak diperhitungkan dalam perhitungan sisa cuti ketika terjadi pemutusan hubungan kerja.
                    </Text>

                </View>
            </ScrollView>
            </View>
        )
    }}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
  
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
    containerText: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 15,
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
        borderColor:'yellow'
    },
    
    }
)
export default LemburHome;