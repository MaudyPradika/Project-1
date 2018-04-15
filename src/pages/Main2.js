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


class Main2 extends Component {

    state={
        text : this.props.navigation.state.params.text,
        menus : [
            {icon:require('../images/4.gif'), title:'cuti', link:' '}, 
            {icon:require('myHR2u/src/images/1.gif'), title:'lembur', link:' '},
            {icon:require('myHR2u/src/images/2.gif'), title:'bpjs', link:' '},
            {icon:require('myHR2u/src/images/3.gif'), title:'gaji', link:' '}
        ],
    }

    render() {

        const menuIcon=this.state.menus.map((menu, i) => {
        return(
        <View style={{backgroundColor:'pink'}}>
        <TouchableOpacity>
            <Image source={menu.icon}/>
            </TouchableOpacity>
            <Text>{menu.title}</Text>
        </View>
        )
    }
        
        
    )
        return (
            <View style={styles.container}>
            <ScrollView>
                {menuIcon}
            </ScrollView>
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


export default Main2;
