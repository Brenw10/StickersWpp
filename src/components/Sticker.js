import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Sticker extends Component {
  render() {
    return (
      <Image style={styles.image} source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});