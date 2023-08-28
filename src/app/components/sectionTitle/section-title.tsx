import './section-title.scss'

interface SectionTitleProps {
    text: string
}
 
const SectionTitle: React.FC<SectionTitleProps> = ({text}) => {
    return ( 
        <h3 className="section-title">{text}</h3>
    );
}
 
export default SectionTitle;