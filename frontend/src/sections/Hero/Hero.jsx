import { useState } from "react";

import Container from "../../components/ui/Container/Container";
import Modal from "../../components/ui/Modal/Modal";

import { getAssetUrl } from "../../services/utils";
import styles from "./Hero.module.scss";

const Hero = ({ data }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { title, description, cta, image, video } = data;

    return (
        <>
            <section className={styles.hero}>
                <Container>
                    <div className={styles.content}>
                        <div className={styles.headingBlock}>
                            <h1 className={styles.title}>
                                <span>{title.line1} </span>
                                <span className={styles.highlight}>
                                    {title.highlight1}
                                </span>

                                <br />

                                <span className={styles.highlight}>
                                    {title.highlight2}
                                </span>{" "}
                                <span>{title.text2}</span>

                                <br />

                                <span>{title.line3}</span>
                            </h1>
                        </div>

                        <div className={styles.copy}>
                            <p className={styles.description}>
                                {description}
                            </p>

                            <a
                                href={cta.href}
                                className={styles.cta}
                            >
                                {cta.label}
                            </a>
                        </div>

                        <div className={styles.media}>
                            <button
                                type="button"
                                className={styles.playButton}
                                aria-label="Play video"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <span className={styles.playIcon} />
                            </button>

                            <img
                                src={getAssetUrl(image.image)}
                                alt={image.alt}
                                className={styles.image}
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <Modal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                ariaLabel={video.title}
            >
                <iframe
                    className={styles.video}
                    src={`${video.src}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Modal>
        </>
        
    );
};

export default Hero;