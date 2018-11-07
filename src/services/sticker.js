import { AsyncStorage } from 'react-native';
import ImgToBase64 from 'react-native-image-base64';

function get() {
  return AsyncStorage.getItem('stickers')
    .then(JSON.parse)
    .then(stickers => stickers || []);
}

function set(stickers) {
  return AsyncStorage.setItem('stickers', JSON.stringify(stickers));
}

function add(imageURL) {
  return Promise.all([get(), ImgToBase64.getBase64String(imageURL)])
    .then(snaps => ({ stickers: snaps[0], base64Image: snaps[1] }))
    .then(({ stickers, base64Image }) => stickers.concat([base64Image]))
    .then(set);
}

function removeAll() {
  return AsyncStorage.removeItem('stickers');
}

function remove(index) {
  return get()
    .then(stickers => stickers.filter((_, i) => index !== i))
    .then(set);
}

module.exports = { get, add, removeAll, remove };