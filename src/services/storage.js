import { AsyncStorage } from 'react-native';

function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

function get(key) {
  return AsyncStorage.getItem(key)
    .then(JSON.parse)
    .then(items => items || []);
}

function addItem(key, value) {
  return get(key)
    .then(items => items.concat([value]))
    .then(items => set(key, items));
}

function removeItemByIndex(key, index) {
  return get(key)
    .then(items => items.filter((_, i) => i !== index))
    .then(items => set(key, items));
}

function remove(key) {
  return AsyncStorage.removeItem(key);
}

export default { get, addItem, remove, removeItemByIndex };