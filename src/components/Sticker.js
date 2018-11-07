import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export default class Sticker extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
        <Button title='Remove' onPress={this.props.onRemove}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});