import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Toolbar from '../../lib/Toolbar'
import NavLembur from './NavLembur'

class TrackingLembur extends Component {
    
      
    render() {

        

        return (
                <View style = {styles.container}>
                <Toolbar/>
                <NavLembur/>
                    <Text style={{top:90, fontWeight: 'bold', fontSize: 20 }}>Tracking Lembur </Text>   
                </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    
    
    }
)
export default TrackingLembur;