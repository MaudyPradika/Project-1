import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

class Admin extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <View>
            <Modal
             animationType="slide"
             transparent={true}
             visible={this.state.modal1Visible}
             supportedOrientations="landscape"
             onRequestClose={() => {
             this.setModalVisible(!this.state.modal1Visible);
                }}>
          <View style={{marginTop: 22, marginLeft: 70, backgroundColor: 'red'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modal1Visible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
    </View>
    </View>
    );
  }
}

export default Admin;