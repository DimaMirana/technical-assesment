import { getAssetUrl } from "../../../services/utils";
import Container from "../../ui/Container/Container";
import styles from "./Footer.module.scss";

const Footer = ({ data }) => {
    const {
        copyright,
        legalLinks,
        socialLinks,
        logo
    } = data;

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>

                    {/* Desktop / mobile links */}
                    <div className={styles.linksArea}>

                        <div className={styles.legalLinks}>
                            {legalLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={styles.link}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className={styles.divider} />

                        <div className={styles.socialLinks}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={styles.link}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className={styles.divider} />
                    </div>

                    {/* Copyright */}
                    <p className={styles.copyright}>
                        <span>{copyright.prefix}</span>{" "}
                        <span className={styles.company}>
                            {copyright.company}
                        </span>{" "}
                        <span>{copyright.suffix}</span>
                    </p>

                    {/* Large logo */}
                    <div className={styles.logoWrapper}>
                        <img
                            src={getAssetUrl(logo.image)}
                            alt={logo.alt}
                            className={styles.logo}
                        />
                    </div>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;