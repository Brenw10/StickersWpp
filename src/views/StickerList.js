import React, { Component } from 'react';
import { StyleSheet, View, NativeModules } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import Sticker from 'StickersWpp/src/components/Sticker';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class StickerList extends Component {
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
  removeAllStickers() {
    return sticker.removeAllStickers()
      .then(this.refresh.bind(this));
  }
  removeSticker(index) {
    return sticker.removeSticker(index)
      .then(this.refresh.bind(this));
  }
  exportToWpp() {
    return sticker.getStickers()
      .then(NativeModules.StickerManager.sendToWhatsApp);
  }
  refresh() {
    return sticker.getStickers()
      .then(stickers => this.setState({ stickers }));
  }
  renderStickerColumns() {
    if (!this.state.stickers) return;
    return this.state.stickers.map((sticker, index) =>
      <Sticker key={index} sticker={sticker} onRemove={() => this.removeSticker(index)} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderStickerColumns()}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Select Image" onPress={this.selectImage.bind(this)}>
            <Ionicons name="md-image" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Export to WhatsApp" onPress={this.exportToWpp.bind(this)}>
            <FontAwesome name="whatsapp" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Remove All" onPress={this.removeAllStickers.bind(this)}>
            <Ionicons name="md-trash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});