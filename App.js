import React, { Component } from 'react';
import { StyleSheet, View, Button, Linking, NativeModules } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import ImgToBase64 from 'react-native-image-base64';
import trayImage from './src/images/tray-image.png';

export default class App extends Component {
  selectImage() {
    return ImagePicker.openPicker({})
      .then(image => ImgToBase64.getBase64String(image.sourceURL))
      .then(base64 => sticker.addSticker(base64));
  }
  getStickersData(stickers) {
    return stickers.map(sticker => ({ image_data: sticker, emojis: ['😄', '😀'] }));
  }
  importToWpp() {
    // const StickerBridge = NativeModules.StickerBridge;
    // StickerBridge.import('Birthday Party', '4 Privet Drive, Surrey');
    const appJson = {
      name: 'StickersWpp',
      identifier: 'stickersWppID',
      publisher: 'StickersWpp',
    };
    return sticker.getStickers()
      .then(stickers =>
        Object.assign(appJson, { tray_image: ImgToBase64.getBase64String(trayImage), stickers: this.getStickersData(stickers) })
      )
      .then(json => console.log(json));
    // .then(json => Linking.openURL(`whatsapp://stickerPack?${JSON.stringify(json)}`));
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