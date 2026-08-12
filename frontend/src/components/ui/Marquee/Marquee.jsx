import { getAssetUrl } from "../../../services/utils";
import styles from "./Marquee.module.scss";


const Marquee = ({
    items,
    reverse = false,
    duration = 30,
    className = "",
}) => {
    const repeatedItems = [...items, ...items];

    return (
        <div className={`${styles.viewport} ${className}`}>
            <div
                className={`${styles.track} ${reverse ? styles.reverse : ""
                    }`}
                style={{
                    "--marquee-duration": `${duration}s`,
                }}
            >
                {repeatedItems.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className={styles.imageCard}
                    >
                        <img
                            src={getAssetUrl(item.image)}
                            alt={index < items.length ? item.alt : ""}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;