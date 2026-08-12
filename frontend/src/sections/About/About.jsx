import SectionIntro from "../../components/ui/SectionIntro/SectionIntro";

const About = ({ data }) => {
    return (
        <SectionIntro
            label={data.label}
            highlight={data.highlight}
            text={data.text}
        />
    );
};

export default About;