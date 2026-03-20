// Cache module for the fast web app

export class Cache {
  constructor() {
    this.store = new Map();
  }
  
  get(key) {
    return this.store.get(key);
  }
  
  set(key, value) {
    this.store.set(key, value);
  }
}