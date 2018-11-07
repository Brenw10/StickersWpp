import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Sticker extends Component {
  render() {
    return (
      <View>
        <View style={styles.remove}>
          <TouchableOpacity onPress={this.props.onRemove}>
            <Icon name="remove" size={20} color="#900" />
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={{ uri: `data:image/png;base64,${this.props.sticker}` }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  remove: {
    alignItems: 'flex-end',
    marginBottom: -15,
    zIndex: 1,
  }
});