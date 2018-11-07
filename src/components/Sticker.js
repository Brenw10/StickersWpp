import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Sticker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: this.props.width - 2, height: this.props.height }}
          source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
  }
});