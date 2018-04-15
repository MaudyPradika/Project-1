import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet, 
    Image, 
    TouchableHighlight, 
    AppRegistry,
} from 'react-native';

import {
    withNavigation
  } from 'react-navigation';

class IconSet extends Component {
    render() {
        return (
            <View style ={styles.Container}> 
            <ScrollView contentContainerStyle={styles.iconContainer} horizontal={true}>
                    
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Admin')} >
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/1.gif')} />
                    </TouchableHighlight >
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('EmployeeBenefit')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/2.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Others')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/3.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Outsourcing')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/4.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PAdminPayroll')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/5.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PersonalInfo')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/6.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PerformanNReward')}> 
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/7.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Resourcing')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/8.gif')} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('MngAndLearning')}>
                    <Image style={styles.icons} 
                        source = {require ('myHR2u/src/images/9.gif')} />                 
                    </TouchableHighlight>
                </ScrollView>
               

            </View>
        );
    }
}

const styles = StyleSheet.create({
Container : {
    height : 65,
    backgroundColor: '#b2bec3',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: '#FFFACD'
},
icons : {
    height: 60,
    width : 60,
    backgroundColor:'transparent',
                        
},

iconContainer: {
    height: 65,
    width : 'auto',
    flexDirection: "row",
    justifyContent:'space-around',  
},

})
export default withNavigation(IconSet);