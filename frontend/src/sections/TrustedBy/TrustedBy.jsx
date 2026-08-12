import Container from "../../components/ui/Container/Container";
import { getAssetUrl } from "../../services/utils";

import styles from "./TrustedBy.module.scss";

const TrustedBy = ({ data }) => {
    const { title, partners } = data;

    return (
        <section className={styles.trustedBy}>
            <Container>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.highlight}>
                            {title.prefix}
                        </span>{" "}

                        {title.text}{" "}

                        <span className={styles.highlight}>
                            {title.suffix}
                        </span>
                    </h2>

                    <div className={styles.logoGrid}>
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className={styles.logoItem}
                            >
                                <img
                                    src={getAssetUrl(partner.image)}
                                    alt={partner.alt}
                                    className={styles.logo}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TrustedBy;