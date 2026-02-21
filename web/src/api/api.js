const BASE_URL = 'http://localhost:8080';

export const loginUser = (username, password) =>
    fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
    });

export const registerUser = (username, email, password) =>
    fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, email, password }),
    });

export const getProfile = () =>
    fetch(`${BASE_URL}/api/auth/profile`, {
        method: 'GET',
        credentials: 'include',
    });

export const logoutUser = () =>
    fetch(`${BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    });