const PASSWORD_KEY = 'generatedPassword';

export function savePassword(password) {
    localStorage.setItem(PASSWORD_KEY, password);
}

export function getPassword() {
    return localStorage.getItem(PASSWORD_KEY);
}