export const setToken = token => localStorage.setItem('x-auth-token', token);

export const getToken = () => {
    // localStorage.getItem('x-auth-token') || null;
    return null
}

export const removeToken = () => {
    localStorage.removeItem('x-auth-token');    
}