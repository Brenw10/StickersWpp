import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Sticker extends Component {
  render() {
    return (
      <View>
        <Image style={{ width: this.props.width, height: this.props.height }}
          source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
      </View>
    );
  }
}