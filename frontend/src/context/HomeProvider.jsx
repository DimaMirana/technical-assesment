import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { getHomeData } from "../api/home.api";
import HomeContext from "./HomeContext";

const HomeProvider = ({ children }) => {
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initial API call
    useEffect(() => {
        const loadHomeData = async () => {
            try {
                const data = await getHomeData();

                setHomeData(data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        loadHomeData();
    }, []);

    // Manual retry
    const refetch = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getHomeData();

            setHomeData(data);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }, []);

    // Stabilize the Context value
    const value = useMemo(
        () => ({
            homeData,
            loading,
            error,
            refetch,
        }),
        [homeData, loading, error, refetch]
    );

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeProvider;