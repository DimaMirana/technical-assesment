import { getAssetUrl } from "../../../../services/utils";
import styles from "./MegaMenu.module.scss";


const MegaMenu = ({ items }) => {
    return (
        <div className={styles.menu}>
            {items.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className={styles.card}
                >
                    <img
                        src={getAssetUrl(item.image)}
                        alt=""
                        className={styles.image}
                    />

                    <div className={styles.overlay} />

                    <h3 className={styles.title}>
                        {item.title}
                    </h3>
                </a>
            ))}
        </div>
    );
};

export default MegaMenu;