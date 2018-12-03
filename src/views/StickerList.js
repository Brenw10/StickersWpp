import React, { Component } from 'react';
import { StyleSheet, View, NativeModules, FlatList, Dimensions, Alert, TouchableOpacity, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import sticker from 'StickersWpp/src/services/sticker';
import Sticker from 'StickersWpp/src/components/Sticker';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class StickerList extends Component {
  static navigationOptions = {
    headerTitle: 'Stickers',
  };
  constructor(props) {
    super(props);
    this.state = {
      stickers: [],
      gridColumns: 3,
    };
    this.refresh();
  }
  selectImage() {
    return ImagePicker.openPicker({})
      .then(image => Platform.OS === 'ios' ? image.sourceURL : image.path)
      .then(imageURL => sticker.add(imageURL))
      .then(this.refresh.bind(this));
  }
  removeAll() {
    return sticker.removeAll()
      .then(this.refresh.bind(this));
  }
  remove(index) {
    return sticker.remove(index)
      .then(this.refresh.bind(this));
  }
  popUpOptions(index) {
    Alert.alert(
      'Options',
      null,
      [
        { text: 'Remove', onPress: () => this.remove(index) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: false },
    )
  }
  exportToWpp() {
    return sticker.getImages()
      .then(NativeModules.StickerManager.sendToWhatsApp);
  }
  refresh() {
    return sticker.getImages()
      .then(stickers => this.setState({ stickers }));
  }
  renderSticker({ item, index }) {
    return (
      <TouchableOpacity onPress={() => this.popUpOptions(index)}>
        <Sticker
          data={item}
          width={Dimensions.get('window').width / this.state.gridColumns}
          height={Dimensions.get('window').width / this.state.gridColumns}
        />
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(_, index) => index}
          numColumns={this.state.gridColumns}
          data={this.state.stickers}
          renderItem={this.renderSticker.bind(this)} />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Select Image" onPress={this.selectImage.bind(this)}>
            <Ionicons name="md-image" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Export to WhatsApp" onPress={this.exportToWpp.bind(this)}>
            <FontAwesome name="whatsapp" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Remove All" onPress={this.removeAll.bind(this)}>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});