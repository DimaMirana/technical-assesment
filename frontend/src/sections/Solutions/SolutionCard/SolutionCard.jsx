import styles from "./SolutionCard.module.scss";

const SolutionCard = ({ card }) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>
                {card.title}
            </h3>

            <p className={styles.description}>
                {card.description}
            </p>
        </article>
    );
};

export default SolutionCard;