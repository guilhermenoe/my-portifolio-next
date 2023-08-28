import SectionTitle from "../sectionTitle/section-title"
import './experience.scss'
import Image from 'next/image'


export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="experiência" />
            <p>Atualmente atuando como Web Development Analyst at Media.Monks Brazil</p>
            <p>Possuo 3 anos de experiencia como desenvolvedor, aqui estão meus conhecimentos e alguns projetos</p>
            <div className="experience-time">
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-javascript.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 Anos</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-html5.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 Anos</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/VTEX.D.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 Anos</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-css.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 Anos</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-reagir.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 Anos</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-typescript.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 Ano</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages ">
                    <Image
                        src="/icons8-next.js.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-0">
                            <span>iniciante</span>
                        </div>
                    </div>
                </div>
                <div className="experience-lenguages">
                    <Image
                        src="/icons8-sass.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 Ano</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}