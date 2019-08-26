export class LocalStorageService {

  setItem(key, value) {
    const jsonValue = JSON.stringify(value);

    localStorage.setItem(key, jsonValue);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  getItem(key) {
    const value = localStorage.getItem(key);

    return JSON.parse(value);
  }

}
