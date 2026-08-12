import { useEffect, useState } from "react";

import Header from "./components/layout/Header/Header";

import Home from "./pages/Home/Home";

import { getNavigationData } from "./api/navigation.api";

const App = () => {
  const [navigation, setNavigation] =
    useState(null);

  const [navigationError, setNavigationError] =
    useState(null);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const data = await getNavigationData();

        setNavigation(data);
      } catch (error) {
        setNavigationError(error.message);
      }
    };

    loadNavigation();
  }, []);

  return (
    <>
      {navigation && (
        <Header navigation={navigation} />
      )}

      {navigationError && (
        <p>Unable to load navigation.</p>
      )}

      <Home />
    </>
  );
};

export default App;