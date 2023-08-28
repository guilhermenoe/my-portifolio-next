import  GitHubIcon  from '../../components/icons/email-icon'
import  InstaIcon  from '../../components/icons/instagram-icon'
import  LinkedinIcon  from '../../components/icons/linkedin-icon'
import  SmartIcon  from '../../components/icons/smartphone-icon'

import './social-buttons.scss'


const SocialButtons: React.FC<{}> = () => {
    return (
        <div className="social">
            <a href="" target="_blank" rel="noopener noreferrer">
            <InstaIcon />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <SmartIcon />
            </a>
        </div>
    );
}

export default SocialButtons;