const API_BASE_URL = "http://localhost:3000";

export const getNavigationData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/navigation`);

    if (!response.ok) {
        throw new Error("Failed to fetch navigation data");
    }

    const result = await response.json();

    return result.data;
};