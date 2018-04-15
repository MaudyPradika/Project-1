import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TimePickerAndroid,
    ScrollView,
    TextInput,
} from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Toolbar from '../../lib/Toolbar'
import NavLembur from './NavLembur'


var radio_props = [
    { label: 'Pribadi\t', value: 0 },
    { label: 'Bawahan\t', value: 1 },
    { label: 'Outsource\t', value: 2 },
];
var radio_props2 = [
    { label: 'Tidak\t', value: 0 },
    { label: 'Ya\t', value: 1 },
];
var radio_props3 = [
    { label: 'Shift\t', value: 0 },
    { label: 'Non Shift\t', value: 1 },
];


class PengajuanLembur extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2018-03-20" }
    }

    render() {

        return (

            <View style={styles.container}>

                <Toolbar />
                <NavLembur />
                <Text Style={{fontSize: 30, justifyContent: 'center'}}>Form Pengajuan Lembur{'\n\n'}</Text>
                <ScrollView Style={styles.containerTable}>
                
                    <View style={styles.formContainer}>
                        <Text>{'\n'}Jenis Pengajuan{'\t\t'}</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Memo Lembur{'\t\t\t'}</Text>
                        <RadioForm
                            radio_props={radio_props2}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Nama Lengkap{'\t\t\t\t'}</Text>
                        <Text>{'\n'}[NAMA KARYAWAN]</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Appraiser{'\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NOMOR DAN NAMA APPRAISER]</Text>
                        
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}PUK{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}[NOMOR DAN NAMA PUK]</Text>
                        
                        
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Shift{'\t\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <Text>{'\n'}</Text>
                        <RadioForm
                            radio_props={radio_props3}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                        <Text>{'\n'}</Text>                        

                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Tanggal Lembur{'\t\t\t'}</Text>
                        
                        <DatePicker
                            style={{ width: 200 }}
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
                        <Text>{'\n'}</Text>
                        
                        
                        
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Jam Masuk dan{'\n'}Jam Pulang{'\t\t\t\t\t\t'}</Text>
                        {/*const {action, hour, minute} = await TimePickerAndroid.open({
                            hour: 14,
                            minute: 0,
                            is24hour: false,
                        });*/}
                        <TextInput
                            style={styles.input}
                            placeholder="Jam Masuk"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Jam Pulang"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />
                        
                    </View>

                    <View style={styles.formContainer}>
                        <Text>{'\n'}Alasan{'\t\t\t\t\t\t\t\t\t\t\t'}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Alasan Lembur"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />
   
                    </View>
                    {/*
                    <View style={styles.containerKiri}>
                        <Text>{'\n'}Jenis Pengajuan</Text>
                        <Text>Memo Lembur</Text>
                        <Text>Nama Lengkap</Text>
                        <Text>Appraiser</Text>
                        <Text>PUK</Text>
                        <Text>Shift</Text>
                        <Text>{'\n'}Tanggal Lembur</Text>
                        <Text>{'\n'}Jam Masuk dan{'\n'}Jam Pulang Lembur</Text>
                        <Text>{'\n'}Alasan</Text>

                    </View>

                    <View style={styles.containerKanan}>
                        
                        <Text>{'\n'}</Text>
                        
                        <RadioForm
                            animation={true}
                            formHorizontal={true}>

                           {radio_props.map((obj, i) => {
                                <RadioButton labelHorizontal={true} key={i}>
                                   <RadioButtonInput
                                   obj={obj}
                                   index={i}
                                   isSelected={this.state.velue3Index === i}
                                   onPress={(value) => { this.setState({ value: value }) }}
                                   borderWidth={1}
                                   buttonSize={40}
                                   buttonOuterSize={80}
                                   buttonWrapStyle={{marginLeft: 10}}
                                   />
                                   <RadioButtonLabel
                                   obj={obj}
                                   index={i}
                                   labelHorizontal={true}
                                   onPress={(value) => { this.setState({ value: value }) }}
                                   labelStyle={{fontSize:18, color:'#2ecc71'}}
                                   labelWrapStyle={{}}
                                   
                                   />
                                </RadioButton>
                               
                           })}
                           
                           </RadioForm>
                          
                        
                        
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />

                        <Text>{'\n'}</Text>
                        <RadioForm
                            radio_props={radio_props2}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                        <Text>{'\n'}[NAMA KARYAWAN]</Text>
                        <Text>{'\n'}[NOMOR DAN NAMA APPRAISER]</Text>
                        <Text>{'\n'}[NOMOR DAN NAMA PUK]</Text>
                        <Text>{'\n'}</Text>
                        <RadioForm
                            radio_props={radio_props3}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                        <Text>{'\n'}</Text>                        

                        <DatePicker
                            style={{ width: 200 }}
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
                        <Text>{'\n'}</Text>
                        
                        
                        const {action, hour, minute} = await TimePickerAndroid.open({
                            hour: 14,
                            minute: 0,
                            is24hour: false,
                        });
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Alasan Lembur"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    */}

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
    input:{
        width: 90,
        
    }



}
)
export default PengajuanLembur;