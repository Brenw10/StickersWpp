import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class App extends Component {
  selectImage() {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true
    }).then(image => console.log(image));
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Image' onPress={this.selectImage.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});