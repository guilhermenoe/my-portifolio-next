import Header from './components/header/header'
import './components/styles/home.scss'
import './components/experience/experience.scss'
import { Experience } from './components/experience/experience'
import AboutMe from './components/about/about'
import Image from 'next/image'
import EmailIcon from './components/icons/email-icon'
import SocialButtons from './components/social-buttons/social-buttons'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <AboutMe />
      <div className="buttons">
        <div className="social">
          <SocialButtons />
        </div>
        <a className="btn-primary" href="mailto:guilherme.snoe@gmail.com">
          contact me
          <EmailIcon />

        </a>
      </div>
    </main>
  )
}
