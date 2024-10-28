import { generatePassword } from './passwordGenerator.js';  
import { savePassword, getPassword } from './storage.js';   

document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.getElementById('length');
    const passwordInput = document.getElementById('password');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');

    const lastPassword = getPassword();
    if (lastPassword) {
        passwordInput.value = lastPassword;
    }

    generateButton.addEventListener('click', () => {
        const length = parseInt(lengthInput.value, 10);
        if (length >= 8 && length <= 32) {
            const newPassword = generatePassword(length); 
            passwordInput.value = newPassword;           
            savePassword(newPassword);                   
        } else {
            alert("Please enter a password length between 8 and 32.");
        }
    });

    copyButton.addEventListener('click', () => {
        const password = passwordInput.value; 
        if (password) {
            navigator.clipboard.writeText(password)
                .then(() => {
                    alert('Password copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy password: ', err);
                });
        }
    });
});