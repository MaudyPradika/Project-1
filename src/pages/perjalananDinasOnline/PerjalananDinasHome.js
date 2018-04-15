import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Toolbar from '../../lib/Toolbar'
import NavPerjalanan from './NavPerjalanan'


class PerjalananDinasHome extends Component {
    state={text:this.props.navigation.state.params.text}
    render() {
        return (
                <View style = {styles.container}>
                    <Toolbar text={this.state.text}/>
                    <NavPerjalanan/>

                    <Text style={{marginLeft: 15, marginTop: 5, fontSize: 15}}>
                        Informasi Penting :{'\n\n'}
                        Setiap Perjalanan Dinas Online harus memenuhi ketentuan:{'\n'}
                        1. Buat memo perjalanan dinas sesuai dengan ketentuan yang berlaku (memo manual){'\n'}
                        2. Scan memo yang telah disetujui ke dalam format PDF, rar, zip (file memo){'\n'}
                        3. Buat pengajuan Perjalanan Dinas Online (myHR2u), lengkapi form perjalanan dinas dan simpan{'\n'}
                        4. Upload file memo dengan klik tombol [attach]{'\n'}
                        5. Submit pengajuan dengan klik tombol [ok] (pastikan file memo sudah di upload){'\n'}
                        6. STPD dan Reimbursement (jika ada) diajukan melalui aplikasi myHR2u online dan dibuat oleh karyawan yang telah mendapatkan perjetujuan perjalanan dinas dari PUK. Jangka waktu pengajuan STPD dan Reimbursement online maksimal satu bulan dari tanggal perjalanan dinas.{'\n'}
                    </Text>
                
                </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        
    },
    
    }
)
export default PerjalananDinasHome;