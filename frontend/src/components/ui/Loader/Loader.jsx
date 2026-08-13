import styles from "./Loader.module.scss";

const Loader = ({ label = "Loading..." }) => {
    return (
        <div
            className={styles.loaderWrapper}
            role="status"
            aria-live="polite"
        >
            <div className={styles.spinner} />
            <span className={styles.label}>{label}</span>
        </div>
    );
};

export default Loader;