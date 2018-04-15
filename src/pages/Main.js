import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    AppRegistry,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Toolbar from 'myHR2u/src/lib/Toolbar';
import IconSet from 'myHR2u/src/lib/IconSet';

class Main extends Component {

    state={text : this.props.navigation.state.params.text}

    render() {
        return (
            <View style={styles.container}>
                <Toolbar text={this.state.text}/>
                

                <ScrollView Style={styles.botContainer}>

                    <View style={styles.profileContainer}>
                        <View style={styles.ppContainer}>
                            <Image resizeMode='contain' style={styles.profileImage}
                                source={require('myHR2u/src/images/tes.png')} />
                        </View>

                        <View style={styles.pdContainer}>

                            <Text style={{ paddingLeft: 5 }}>Name         : {this.state.text}</Text>
                            <Text style={{ paddingLeft: 5 }}>Work Unit  :</Text>
                            <Text style={{ paddingLeft: 5 }}>Job Tittle  :</Text>

                        </View>
                    </View>

                    <View style={styles.favContainer}>
                        <Text style={{ fontSize: 20, justifyContent: 'center' }}> Favourite Menu </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('CutiHome')} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Cuti</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('LemburHome')} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Lembur</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('TrainingHome')} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Training Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('ESPTHome', {text: this.state.text})} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>eSPT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('P2KOnlineHome')} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>P2K Online</Text>
                        </TouchableOpacity><TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('PinjamanOnlineHome')} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Pinjaman Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('SlipGajiOnlineHome', {text: this.state.text})} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Slip Gaji Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('PerjalananDinasHome', {text: this.state.text})} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Perjalanan Dinas Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{justifyContent: 'center', marginHorizontal: 10, paddingTop: 5}}
                            onPress={() => this.props.navigation.navigate('ETravelHome', {text: this.state.text})} >
                            <Text style={{ marginLeft: 10, fontSize: 17 }}>eTravel{'\n'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.todoContainer}>
                        <Text style={{ justifyContent: 'center', fontSize: 20 }}>
                            {'\n'} To do list
                        </Text>
                    </View>

                    <View style={{
                        height: 300,
                        width: 'auto',
                        backgroundColor: '#b2bec3'
                    }}>
                        <Text style={{ justifyContent: 'center', fontSize: 20 }}>
                            {'\n'} HC Care
                        </Text>
                    </View>

                </ScrollView>
                <IconSet />

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    favContainer: {
        height: 'auto',
        width: 'auto',
        backgroundColor: "#b2bec3",
        borderWidth: 1,
        paddingLeft: 5,
    },
    todoContainer: {
        height: 300,
        width: 'auto',
        backgroundColor: "#b2bec3",
        borderWidth: 1,
        borderColor: "gray",
    },

    ppContainer: {
        width: 140,
        height: 120,
        backgroundColor: 'transparent',
        paddingLeft: 5,

        justifyContent: 'center',


    },
    pdContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',


    },
    profileImage: {
        width: '100%',
        height: '100%',
        maxWidth: 120,
        maxHeight: 100,

    },
    profileContainer: {
        height: 130,
        width: 'auto',
        backgroundColor: '#dfe6e9',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "gray"
    },
    botContainer: {
        flex: 1,
        backgroundColor: 'red',
    },
    button: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        paddingTop: 5
    },
});


export default Main;
