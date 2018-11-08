import ImgToBase64 from 'react-native-image-base64';
import storage from 'StickersWpp/src/services/storage';
import { STICKER_KEY } from 'StickersWpp/src/core/constants';

function getImages() {
  return storage.get(STICKER_KEY);
}

function add(imageURL) {
  return ImgToBase64.getBase64String(imageURL)
    .then(base64Image => storage.addItem(STICKER_KEY, base64Image));
}

function removeAll() {
  return storage.remove(STICKER_KEY);
}

function remove(index) {
  return storage.removeItemByIndex(STICKER_KEY, index);
}

export default { getImages, add, removeAll, remove };