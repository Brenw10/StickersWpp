import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import StickerList from 'StickersWpp/src/views/StickerList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StickerList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});