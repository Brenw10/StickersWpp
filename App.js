import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import { NativeModules } from 'react-native';

export default class App extends Component {
  selectImage() {
    return ImagePicker.openPicker({})
      .then(image => sticker.addSticker(image.sourceURL));
  }
  importToWpp() {
    const StickerBridge = NativeModules.StickerBridge;
    return sticker.getStickers()
      .then(stickers => StickerBridge.import(stickers));
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Image' onPress={this.selectImage.bind(this)} />
        <Button title='Import to WhatsApp' onPress={this.importToWpp.bind(this)} />
        <Button title='Remove all stickers' onPress={sticker.removeStickers.bind(this)} />
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