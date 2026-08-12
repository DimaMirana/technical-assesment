import Carousel from "../../components/ui/Carousel/Carousel";
import Container from "../../components/ui/Container/Container";
import { getAssetUrl } from "../../services/utils";

import styles from "./ProductShowcase.module.scss";

const ProductShowcase = ({ data }) => {
    const {
        logo,
        title,
        description,
        cta,
        images
    } = data;

    return (
        <section className={styles.showcase}>
            <Container>
                <div className={styles.content}>

                    <div className={styles.copy}>
                        <img
                            src={getAssetUrl(logo.image)}
                            alt={logo.alt}
                            className={styles.brandLogo}
                        />

                        <div className={styles.textBlock}>
                            <h2 className={styles.title}>
                                {title}
                            </h2>

                            <p className={styles.description}>
                                {description}
                            </p>

                            <a
                                href={cta.href}
                                className={styles.cta}
                            >
                                {cta.label}
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <Carousel images={images} />

                </div>
            </Container>
        </section>
    );
};

export default ProductShowcase;