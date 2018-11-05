import { AsyncStorage } from 'react-native';

function getStickers() {
  return AsyncStorage.getItem('stickers')
    .then(stickers => JSON.parse(stickers))
    .then(stickers => stickers || []);
}

function setStickers(stickers) {
  return AsyncStorage.setItem('stickers', JSON.stringify(stickers));
}

function addSticker(base64) {
  return getStickers()
    .then(stickers => stickers.concat([base64]))
    .then(stickers => setStickers(stickers));
}

function removeStickers() {
  return AsyncStorage.removeItem('stickers');
}

module.exports = { getStickers, addSticker, removeStickers };