import { describe, it, expect } from 'vitest';
import { generatePassword } from '../js/passwordGenerator.js';

describe('Password Generator', () => {
    it('should generate a password of the correct length', () => {
        const length = 12;
        const password = generatePassword(length);
        expect(password.length).toBe(length);
    });

    it('should generate a password with characters from the charset', () => {
        const length = 10;
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?";
        const password = generatePassword(length);
        for (let char of password) {
            expect(charset.includes(char)).toBe(true);
        }
    });
});