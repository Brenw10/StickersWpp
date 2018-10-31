import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';

export default class App extends Component {
  selectImage() {
    ImagePicker.openPicker({})
      .then(image => sticker.addSticker(image.sourceURL));
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