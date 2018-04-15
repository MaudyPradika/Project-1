import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage'

var people = [
    { username: 'Budi', age: 22 },
    { username: 'Gilang', age: 20 },
];

class Greeting extends Component{
    render(){
        return (
            <Text>Hello {this.props.name}! {'\n\n'}</Text>
        );
    }
}
var count=0;

class EmployeeBenefit extends Component {

    constructor() {
        super();
        this.state = {
            NumberHolder: 1,
            NumberHolder2: 0,
        }
    }
    
    GenerateRandomNumber = () => {
        
        var RandomNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({ NumberHolder: RandomNumber });
        
        if(this.state.NumberHolder > count) {
            count = (count + this.state.NumberHolder);
            
        }
        this.setState({NumberHolder2: count})
    }
    
    render() {
        return (
            <View style={styles.container}>

                <Greeting name='Amelia'/>

                <Button
                    onPress={() => this.props.navigation.navigate('MngAndLearning', { name: 'selamat hari rabu :D', people: people })}
                    title='tes'
                />
                <Text>{'\n'}</Text>
                <Button
                        onPress={this.GenerateRandomNumber}
                        title='Generate Random Number'
                />
                <Text style={{ fontSize: 20 }}>{'\n'}{this.state.NumberHolder2} {'\n'}</Text>
                <Text style={{ fontSize: 20 }}>{'\n'}{this.state.NumberHolder} {'\n\n\n\n'}</Text>
                

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main', {})}>
                    <Text>kkk</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    vertical:{
        flexDirection: 'row'  ,
    },
    bkground: {
        backgroundColor: 'transparent',
        flexGrow: 1,
        position: 'absolute',
        width: 350,
        height: 135,
        justifyContent: 'center',
        alignContent: 'center'


    }

}
)
export default EmployeeBenefit;