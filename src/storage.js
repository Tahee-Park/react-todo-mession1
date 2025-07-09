const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    const stringified = JSON.stringify(value);
    storage.setItem(key, stringified);
  } catch (e) {
    console.log(e);
  }
};
export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
  }
};
