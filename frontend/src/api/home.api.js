const API_BASE_URL = "http://localhost:3000";

export const getHomeData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/home`);

    if (!response.ok) {
        throw new Error("Failed to fetch home data");
    }

    const result = await response.json();

    return result.data;
};