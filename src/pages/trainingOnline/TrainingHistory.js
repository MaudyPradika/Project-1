import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



class TrainingHistory extends Component {
    
      
    render() {

        

        return (
                <View style = {styles.container}>
                   <Image
                        style={styles.bkground} resizeMode="stretch"
             source={require('myHR2u/src/images/images.png')} />
                    <Text style={{top:90, fontWeight: 'bold', fontSize: 20 }}> Training History Page </Text>   
                </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
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
export default TrainingHistory;