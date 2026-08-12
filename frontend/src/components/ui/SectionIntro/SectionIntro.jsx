import Container from "../Container/Container";
import styles from "./SectionIntro.module.scss";

const SectionIntro = ({
    label,
    heading,
    highlight,
    text,
    className = "",
}) => {
    return (
        <section className={`${styles.sectionIntro} ${className}`}>
            <Container>
                <div className={styles.content}>
                    <p className={styles.label}>
                        {label}
                    </p>

                    <div className={styles.mainContent}>
                        {heading && (
                            <h2 className={styles.heading}>
                                {heading}
                            </h2>
                        )}

                        {(highlight || text) && (
                            <p
                                className={`${styles.description} ${highlight && !heading
                                        ? styles.largeDescription
                                        : ""
                                    }`}
                            >
                                {highlight && (
                                    <strong className={styles.highlight}>
                                        {highlight}
                                    </strong>
                                )}

                                {highlight && text && " "}

                                {text}
                            </p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SectionIntro;