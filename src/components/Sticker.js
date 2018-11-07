import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Sticker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: .8,
    borderColor: 'white',
  },
  image: {
    width: 125,
    height: 125,
  },
});