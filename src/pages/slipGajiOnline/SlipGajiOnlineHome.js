import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Toolbar from '../../lib/Toolbar'


class SlipGajiOnlineHome extends Component {
    
    state={text:this.props.navigation.state.params.text}
    render() {

        return (
                <View style = {styles.container}>
                <Toolbar text={this.state.text}/>
                   
                    <Text style={{top:10, fontSize: 15, borderWidth: 2, backgroundColor: 'skyblue', marginHorizontal: 5}}> 
                    Slip Gaji Online Page{'\n\n'}
                    Informasi Penting{'\n\n'}
                    Untuk apa potongan reg. repayment (Simas)?{'\n'}
                    Potongan tersebut adalah untuk tambahan premi atas pilihan opsi 6 / 7 asuransi.{'\n\n'}

                    Apa arti dari potongan cash in advance?{'\n'}
                    Potongan tersebut merupakan pemotongan yang digunakan untuk menghitung pajak penghasilan.{'\n'}
                    Misalnya: karyawan menerima THR pada tanggal sebelumnya, maka untuk penyelesaian pajaknya dilakukan pada penggajian berikutnya dengan memasukkan THR gross di kolom pendapatan dan THR nett (cash advance) di kolom pemotongan.{'\n\n'}
                    
                    [SLIP GAJI]
                    </Text>   
                </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    bkground : {
        backgroundColor: 'transparent',
        flexGrow: 1,
        position: 'absolute',
        width: 350,
        height: 135,
        justifyContent: 'center',
        alignContent:'center'

    }
    
    }
)
export default SlipGajiOnlineHome;