const API_BASE_URL = "http://localhost:3000";//import.meta.env.VITE_API_BASE_URL;

export const getAssetUrl = (path) => {
    return `${API_BASE_URL}${path}`;
};