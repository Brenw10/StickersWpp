import { AsyncStorage } from 'react-native';
import ImgToBase64 from 'react-native-image-base64';

function getStickers() {
  return AsyncStorage.getItem('stickers')
    .then(JSON.parse)
    .then(stickers => stickers || []);
}

function setStickers(stickers) {
  return AsyncStorage.setItem('stickers', JSON.stringify(stickers));
}

function addSticker(imageURL) {
  Promise.all([getStickers(), ImgToBase64.getBase64String(imageURL)])
    .then(snaps => ({ stickers: snaps[0], base64Image: snaps[1] }))
    .then(({ stickers, base64Image }) => stickers.concat([base64Image]))
    .then(setStickers);
}

function removeStickers() {
  return AsyncStorage.removeItem('stickers');
}

module.exports = { getStickers, addSticker, removeStickers };