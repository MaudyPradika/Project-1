import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Toolbar from '../../lib/Toolbar'
import NavP2K from './NavP2K'

class P2KOnlineHome extends Component {
    //state={text:this.props.navigation.state.params.text}
    render() {
        return (
            <View style ={styles.container}> 
                <Toolbar/>
                <NavP2K/>
              
                <ScrollView>
                    <Text style={{fontSize: 15}}>
                        {'\t'}Daftar Penilaian Prestasi Kerja
                    </Text>
                    <Image style={styles.logo} source = {require ('../../images/P2K.jpg')} />
                </ScrollView>
            </View>
        )
    }}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    logo : {
        width: 'auto',
        height: 240,
        resizeMode:'contain'
    },
    }
)
export default P2KOnlineHome;