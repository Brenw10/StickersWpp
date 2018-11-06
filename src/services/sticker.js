import { AsyncStorage } from 'react-native';

function getStickers() {
  return AsyncStorage.getItem('stickers')
    .then(JSON.parse)
    .then(stickers => stickers || []);
}

function setStickers(stickers) {
  return AsyncStorage.setItem('stickers', JSON.stringify(stickers));
}

function addSticker(base64) {
  return getStickers()
    .then(stickers => stickers.concat([base64]))
    .then(setStickers);
}

function removeStickers() {
  return AsyncStorage.removeItem('stickers');
}

module.exports = { getStickers, addSticker, removeStickers };