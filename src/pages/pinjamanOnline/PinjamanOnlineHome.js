import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Toolbar from '../../lib/Toolbar'
import NavPinjaman from './NavPinjaman'


class PinjamanOnlineHome extends Component {
    state={text:this.props.navigation.state.params.text}
    render() {
        return (
                <View style = {styles.container}>
                    <Toolbar text={this.state.text}/>
                    <NavPinjaman/>

                    <Text style={{marginLeft: 15, marginTop: 5, fontSize: 15}}>
                        Saat ini jenis pinjaman yang bisa diajukan secara online adalah:{'\n\n'}
                        >> Personal Loan{'\n'}
                        a. Rent House Loan{'\n'}
                        {'\t'}- Asli surat keterangan RT dan RW beserta stempel{'\n'}
                        {'\t'}- Asli perjanjian sewa-menyewa sebanyak dua rangkap{'\n'}
                        {'\t'}- Asli kwitansi DP dan Lunas{'\n'}
                        b. Education Loan{'\n'}
                        {'\t'}- Perincian biaya dari sekolah / universitas{'\n'}
                        {'\t'}- Asli kwitansi pembayaran{'\n'}
                        c. Health Loan{'\n'}
                        {'\t'}- Perincian biaya rumah sakit{'\n'}
                        {'\t'}- Akseptasi biaya dari rumah sakit{'\n'}
                        {'\t'}- Nota debit dari pihak asuransi{'\n'}
                        d. Others/Flooded Loan{'\n'}
                        {'\t'}- Perincian biaya / RAB{'\n'}
                        {'\t'}- Surat keterangan RT/RW{'\n'}
                        e. Pinjaman Selisih Kas{'\n'}
                        {'\t'}- Fotocopy berita acara selisih kas{'\n\n'}

                        >> Multifunction Loan{'\n'}
                        {'\t'}- Form asuransi jiwa (khusus pinjaman dengan plafond mulai dari 32 juta rupiah keatas{'\n\n'}
                        
                        Sebelum dokumen pendukung ASLI diterima oleh HC Operations, maka pinjaman tidak dapat dicairkan

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
export default PinjamanOnlineHome;