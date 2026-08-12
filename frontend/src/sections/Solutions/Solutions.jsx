import { useState } from "react";

import Container from "../../components/ui/Container/Container";
import SolutionCard from "./SolutionCard/SolutionCard";

import styles from "./Solutions.module.scss";

const Solutions = ({ data }) => {
    const [activeId, setActiveId] = useState(data[0]?.id);

    const activeSolution =
        data.find((solution) => solution.id === activeId) ?? data[0];

    if (!activeSolution) return null;

    return (
        <section
            id="solutions"
            className={styles.solutions}
        >
            {/* Sticky navigation */}
            <div className={styles.stickyNav}>
                <Container>
                    <div
                        className={styles.tabs}
                        role="tablist"
                        aria-label="Solutions"
                    >
                        {data.map((solution) => {
                            const isActive = solution.id === activeId;

                            return (
                                <button
                                    key={solution.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`${styles.tab} ${isActive ? styles.activeTab : ""
                                        }`}
                                    onClick={() => setActiveId(solution.id)}
                                >
                                    {solution.tabLabel}
                                </button>
                            );
                        })}
                    </div>
                </Container>
            </div>

            <Container>
                {/* Active solution */}
                <div className={styles.intro}>
                    <div className={styles.number}>
                        {activeSolution.number}
                    </div>

                    <div className={styles.copy}>
                        <h2 className={styles.title}>
                            {activeSolution.title}
                        </h2>

                        <p className={styles.description}>
                            {activeSolution.description}
                        </p>

                        <a
                            href={activeSolution.cta.href}
                            className={styles.cta}
                        >
                            {activeSolution.cta.label}
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className={styles.cards}>
                    {activeSolution.cards.map((card) => (
                        <SolutionCard
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Solutions;