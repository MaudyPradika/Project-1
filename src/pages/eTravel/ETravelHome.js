import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Toolbar from '../../lib/Toolbar'
import NavTravel from './NavTravel'


class ETravelHome extends Component {
    
    state={text:this.props.navigation.state.params.text}
    render() {

        

        return (
            <View style = {styles.container}>
            <Toolbar text={this.state.text}/>
            <NavTravel/>

            <Text style={{marginLeft: 15, marginTop: 5, fontSize: 15}}>
            STANDARD FASILITAS HOTEL DAN PESAWAT 
            
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
export default ETravelHome;