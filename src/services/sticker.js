import ImgToBase64 from 'react-native-image-base64';
import storage from 'StickersWpp/src/services/storage';
import { STICKER } from 'StickersWpp/src/core/constant';

function getImages() {
  return storage.get(STICKER.KEY);
}

function add(imageURL) {
  return ImgToBase64.getBase64String(imageURL)
    .then(base64Image => storage.addItem(STICKER.KEY, base64Image));
}

function removeAll() {
  return storage.remove(STICKER.KEY);
}

function remove(index) {
  return storage.removeItemByIndex(STICKER.KEY, index);
}

export default { getImages, add, removeAll, remove };