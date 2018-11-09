import storage from 'StickersWpp/src/services/storage';
import { STICKER } from 'StickersWpp/src/core/constants';

function getImages() {
  return storage.get(STICKER.KEY);
}

function add(image) {
  return storage.addItem(STICKER.KEY, image.data);
}

function removeAll() {
  return storage.remove(STICKER.KEY);
}

function remove(index) {
  return storage.removeItemByIndex(STICKER.KEY, index);
}

export default { getImages, add, removeAll, remove };