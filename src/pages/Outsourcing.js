import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    ActivityIndicator,
    FlatList
} from 'react-native';

//import Data from './quotes.json'

class Outsourcing extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => index}
                />
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
export default Outsourcing;