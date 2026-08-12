const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getNavigationData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/navigation`);

    if (!response.ok) {
        throw new Error("Failed to fetch navigation data");
    }

    const result = await response.json();

    return result.data;
};