import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./Carousel.module.scss";
import { getAssetUrl } from "../../../services/utils";

const Carousel = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 5000,
                stopOnInteraction: false,
            }),
        ]
    );

    const onSelect = useCallback((api) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const goToSlide = (index) => {
        emblaApi?.scrollTo(index);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {images.map((image) => (
                        <div key={image.id} className={styles.slide}>
                            <img
                                src={getAssetUrl(image.image)}
                                alt={image.alt}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {images.length > 1 && (
                <div
                    className={styles.indicators}
                    aria-label="Product images"
                >
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            type="button"
                            aria-label={`Go to image ${index + 1}`}
                            aria-current={index === selectedIndex}
                            className={`${styles.indicator} ${index === selectedIndex
                                    ? styles.activeIndicator
                                    : ""
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;