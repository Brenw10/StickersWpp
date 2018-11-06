import React, { Component } from 'react';
import { StyleSheet, View, Button, NativeModules } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import { Grid, Col } from 'react-native-easy-grid';
import Sticker from 'StickersWpp/src/components/Sticker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickers: []
    };
    this.refresh();
  }
  selectImage() {
    return ImagePicker.openPicker({})
      .then(image => sticker.addSticker(image.sourceURL))
      .then(this.refresh.bind(this));
  }
  exportToWpp() {
    const StickerManager = NativeModules.StickerManager;
    return sticker.getStickers()
      .then(StickerManager.sendToWhatsApp);
  }
  removeAllStickers() {
    return sticker.removeStickers()
      .then(this.refresh.bind(this));
  }
  refresh() {
    return sticker.getStickers()
      .then(stickers => this.setState({ stickers }));
  }
  renderStickerColumns() {
    if (!this.state.stickers) return;
    return this.state.stickers.map((sticker, i) =>
      <Sticker key={i} sticker={sticker} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Select new image' onPress={this.selectImage.bind(this)} />
        <Button title='Export to WhatsApp' onPress={this.exportToWpp.bind(this)} />
        <Button title='Remove all stickers' onPress={this.removeAllStickers.bind(this)} />
        {this.renderStickerColumns()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
});