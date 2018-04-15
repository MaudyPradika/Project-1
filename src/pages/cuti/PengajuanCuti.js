import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TimePickerAndroid,
    ScrollView,
    TextInput,
} from 'react-native';

import {Dropdown} from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import Toolbar from '../../lib/Toolbar'
import NavCuti from './NavCuti'


var radio_props = [
    { value: 'Tipe A' },
    { value: 'Tipe B' },
    { value: 'Tipe C' },
];


class PengajuanCuti extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2018-03-20" }
    }
    
    render() {
        return (
            <View style={styles.container}>

                <Toolbar />
                <NavCuti />
                <Text Style={{ fontSize: 30, justifyContent: 'center' }}>Form Pengajuan Cuti{'\n\n'}</Text>
                <ScrollView Style={styles.containerTable}>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Nama Lengkap{'\t\t\t\t'}</Text>
                        <Text>{'\n'}[NAMA KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}NPK{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NPK KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Band{'\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[BAND KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Jabatan{'\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[JABATAN KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Tanggal Masuk{'\t\t\t\t'}</Text>
                        <Text>{'\n'}[TANGGAL MASUK KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Unit Kerja{'\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[UNIT KERJA KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Tipe Cuti/Ijin{'\t\t\t\t\t\t\t'}</Text>
                        
                        <Dropdown 
                            label='Select One'
                            data={radio_props}
                            itemPadding='2'
                        />
                        <Text>{'\n'}</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text>{'\n'}Tunjangan Cuti{'\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[TUNJANGAN CUTI]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Masa Cuti{'\t\t\t\t\t\t\t\t'}</Text>

                        <DatePicker
                            style={{ width: 100 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2018-03-20"
                            maxDate="2019-04-20"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <Text>{' s/d '}</Text>
                        <DatePicker
                            style={{ width: 100 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2018-03-20"
                            maxDate="2019-04-20"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />



                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Pengganti{'\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NPK DAN NAMA PENGGANTI]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Atasan Langsung{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NPK DAN NAMA ATASAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}PUK{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NPK DAN NAMA PUK]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Email Pemohon{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[EMAIL PEMOHON]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Catatan{'\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Alasan Lembur"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />

                    </View>
                    <View style={styles.formContainer}>
                        <Text>{'\n'}Demikian permohonan ini saya ajukan untuk mendapatkan persetujuan.{'\n'} Diajuan di </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Alasan Lembur"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />
                        <Text>pada tanggal [TANGGAL HARI INI].</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    formContainer: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingTop: 3,
    },
    containerTable: {
        flex: 1,
        backgroundColor: 'red',
    },
    containerKiri: {
        width: '30%',
        height: '100%',
        marginLeft: '5%',
        borderWidth: 1,
        justifyContent: 'space-around',

    },
    containerKanan: {

        width: '60%',
        height: '100%',
        borderWidth: 1,
    },
    input: {
        width: 90,

    }



}
)
export default PengajuanCuti;