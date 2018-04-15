import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, Button} from 'react-native';

class PersonalInfo extends Component {
    render() {
        return (
                <View style = {styles.container}>
                    <Text style={{fontSize: 20 }}> Hello World </Text>
                    <Button onPress={()=>ToastAndroid.show("Hello!", ToastAndroid.SHORT)} title='press me'/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default PersonalInfo;
