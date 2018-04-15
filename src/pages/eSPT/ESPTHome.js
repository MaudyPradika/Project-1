import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native';
import Toolbar from '../../lib/Toolbar'

class ESPTHome extends Component {
    state={text:this.props.navigation.state.params.text}
    render() {
        return (
            <View style = {styles.container}>
            <Toolbar text={this.state.text}/>
            
                <View style = {styles.homeContainer}>
                <Text style={styles.homeText}>
                    Attach eSPT here
                </Text>

                </View>
            </View>
        )
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    homeContainer: {
        height: 220,
        width: 'auto',
        backgroundColor: "#ffff", 
        
    },  
    homeText:{
        borderRightWidth: 1,
        borderLeftWidth: 1, 
        fontSize: 20, 
        
    },
    
    containerText: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 15,
    },
    
    }
)
export default ESPTHome;