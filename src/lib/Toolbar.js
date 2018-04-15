//
// Toolbar Component
//

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'

import {
  withNavigation
} from 'react-navigation';

class Toolbar extends Component {
  state = { text: this.props.text }
  render() {

    return (
      <View style={styles.toolbar}>
        <View style={styles.containerButton}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Main', { text: this.state.text })} >
            <Image style={styles.icons} source={require('../images/Home.png')} />
            
          </TouchableHighlight >
          
        </View>

        <View style={styles.containerTittle}>
          <Image source={require('../images/hrlogo2.png')} style={styles.title} >

          </Image>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.containerSearchbox}>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 40,
    width: 'auto',
    flexDirection: 'row',
    backgroundColor: '#FFBC00',
    borderBottomWidth: 4,
    borderBottomColor: '#ffc72b'
  },
  title: {
    marginLeft: 16,
    width: '100%',
    height: '100%',
    maxWidth: 90,
    maxHeight: 90,
    resizeMode: 'contain'

  },
  containerTittle: {
    height: 'auto',
    width: '30%',
    backgroundColor: 'transparent'
  },
  containerButton: {
    height: 'auto',
    width: '12%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  containerSearchbox: {
    height: 'auto',
    width: '50%',
    backgroundColor: 'transparent'
  },
  icons: {
    height: 28,
    width: 28,
    paddingLeft: 20,
    backgroundColor: 'transparent',
  },

})

export default withNavigation(Toolbar);