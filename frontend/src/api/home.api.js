const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getHomeData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/home`);

    if (!response.ok) {
        throw new Error("Failed to fetch home data");
    }

    const result = await response.json();

    return result.data;
};