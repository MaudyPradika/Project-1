import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TimePickerAndroid,
    ScrollView,
    TextInput,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import DatePicker from 'react-native-datepicker';
import Toolbar from '../../lib/Toolbar'
import NavP2K from './NavP2K'

class PengajuanP2K extends Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {

        return (

            <View style={styles.container}>

                <Toolbar />
                <NavP2K />

                <Text Style={{ fontSize: 30, justifyContent: 'center' }}>Daftar Penilaian Prestasi Kerja{'\n'}[Nama dan NPK Karyawan]{'\n\n'}</Text>
                <ScrollView Style={styles.containerTable}>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Nama Lengkap{'\t\t\t\t'}</Text>
                        <Text>{'\n'}Appraiser{'\t\t\t\t'}</Text>
                        <Text>{'\n'}Status{'\t\t\t\t'}</Text>
                        <Text>{'\n'}Option{'\t\t\t\t'}</Text>
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
        justifyContent: 'center',
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
export default PengajuanP2K;