import { describe, it, expect, beforeEach, vi } from 'vitest';
import { savePassword, getPassword } from '../js/storage.js';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('LocalStorage', () => {
    beforeEach(() => {
        localStorage.clear(); 
    });

    it('should save the password to localStorage', () => {
        const password = 'someRandomString';
        savePassword(password);
        const storedPassword = getPassword();
        expect(storedPassword).toBe(password);
    });

    it('should return null if no password is saved', () => {
        const storedPassword = getPassword();
        expect(storedPassword).toBe(null);
    });
});