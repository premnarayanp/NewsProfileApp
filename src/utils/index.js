export * from './constants';

import AsyncStorage from '@react-native-async-storage/async-storage';
//store items/token in local storage

export const setItemInLocalStorage = async (key, value) => {
  //console.error('key==',key,"value====",value);
  try {
    if (!key || !value) {
      return new Error('Can not store in LS');
    }
    const valueToStore = typeof value !== 'string' ? JSON.stringify(value) : value;

    await AsyncStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error(error);
  }
};

//get items/token from local storage
export const getItemFromLocalStorage = async (key) => {
  try {
    if (!key) {
      return new Error('Can get the value from LS');
    }
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

//remove key from local storage
export const removeItemFromLocalStorage = async (key) => {
  try {
    if (!key) {
      return new Error('Can get the value from LS');
    }
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

//encoded form body
export const getFormBody = (params) => {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); // 'username=aakash&password=123213'
};