import "./about.scss";
import SectionTitle from "../sectionTitle/section-title";

function AboutMe() {
    return (
        <div className="infos">
            <SectionTitle text="Lenguages" />
            <div className="lenguages-info">
                <span>en - none</span>
                <span>PT-BR - Native Speaker</span>
            </div>
            <div className="education-info">
                <SectionTitle text="Education" />
                <span>🎓</span>
                <span>texto</span>
            </div>
        </div>
    );
}

export default AboutMe;