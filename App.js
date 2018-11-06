import React, { Component } from 'react';
import { StyleSheet, View, Button, NativeModules } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import ImgToBase64 from 'react-native-image-base64';

export default class App extends Component {
  selectImage() {
    return ImagePicker.openPicker({})
      .then(image => ImgToBase64.getBase64String(image.sourceURL))
      .then(base64 => sticker.addSticker(base64));
  }
  importToWpp() {
    const StickerManager = NativeModules.StickerManager;
    return sticker.getStickers()
      .then(StickerManager.sendToWhatsApp);
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