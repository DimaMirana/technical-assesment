import SectionIntro from "../../components/ui/SectionIntro/SectionIntro";
import Marquee from "../../components/ui/Marquee/Marquee";

import styles from "./TechStack.module.scss";

const TechStack = ({ data }) => {
    return (
        <section className={styles.techStack}>
            <SectionIntro
                label={data.label}
                heading={data.heading}
                text={data.text}
            />

            <div className={styles.rows}>
                <Marquee items={data.rows[0]} />
                <Marquee items={data.rows[1]} reverse />
                <Marquee items={data.rows[2]} />
            </div>
        </section>
    );
};

export default TechStack;