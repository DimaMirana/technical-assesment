import { useContext } from "react";

import HomeContext from "../../context/HomeContext";

import TrustedBy from "../../sections/TrustedBy/TrustedBy";
import About from "../../sections/About/About";
import ProductShowcase from "../../sections/ProductShowcase/ProductShowcase";
import TechStack from "../../sections/TechStack/TechStack";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import Solutions from "../../sections/Solutions/Solutions";
import Loader from "../../components/ui/Loader/Loader";

const Home = () => {
    const { homeData, loading, error, refetch } = useContext(HomeContext);

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return (
            <div>
                <p>Unable to load the page.</p>
                <button onClick={refetch}>Try again</button>
            </div>
        );
    }

    return (
        <>
            <Hero data={homeData.hero} />
            <TrustedBy data={homeData.trustedBy} />
            <Solutions data={homeData.solutions} />
            <About data={homeData.about} />
            <ProductShowcase data={homeData.productShowcase} />
            <TechStack data={homeData.techStack} />
            <Footer data={homeData.footer} />
        </>
    );
};

export default Home;