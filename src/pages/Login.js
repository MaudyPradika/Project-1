import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button,
} from 'react-native';

//var SQLite = require('react-native-sqlite-storage')
//import SQLite from 'react-native-sqlite-storage'

class Login extends Component {
    state={text:""}

    ValidateUser=()=>{
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        flexGrow: 1,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                    source={require('../images/loginEdit.jpg')} />



                <View style={styles.containerInput}>

                    <KeyboardAvoidingView behavior="padding" style={ styles.formcontainer} >
                        <Text style={{ paddingLeft: 30 }}> Username : </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placehoderTextCollor="#2d3436"
                            returnKeyType="next"
                            underlineColorAndroid="transparent"
                            onChangeText = {text => this.setState({text})}
                        />
                        <Text style={{ paddingLeft: 30, paddingTop: 8 }}> Password : </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placehoderTextCollor="#2d3436"
                            secureTextEntry
                            returnKeyType="done"
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            
                            onPress={() => this.props.navigation.navigate('Main', {text: this.state.text})} >
                            <Text style={{ paddingLeft: 10, fontSize: 12 }}>Login</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>

                    
                </View>

            </View>
        );
    }
}

/**
 * abuabu f0e8e8
 * fff200 kuning
 * FFBC00
 */

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',

    },
    logocontainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
    },
    formcontainer: {
        alignContent: 'flex-end',
        flexGrow: 1,
        paddingBottom: 150,

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginRight: 30,
        marginLeft: 30,
        paddingLeft: 10,
        textAlign: 'auto',
        fontSize: 12,
        borderRadius: 20,
        borderWidth: 2
    },
    button: {
        paddingVertical: 10,
        justifyContent: 'center',
        width: 100,
        //backgroundColor : 'rgba(255, 242, 0,0.4)',
        paddingLeft: 30,
    },
    containerInput: {
        height: 'auto',
        width: 'auto',
        justifyContent: 'flex-end',
        paddingTop: 200,
    },
});

export default Login;
