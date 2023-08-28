import Header from './components/header/header'
import './components/styles/home.scss'
import './components/experience/experience.scss'
import { Experience } from './components/experience/experience'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>


        <div className="infos">
          <h3>lenguagem</h3>
          <div className="lenguages-infos">
            <span>en - none</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <div className="education-info">
            <h3>education</h3>
            <span>🎓</span>
            <span>texto</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
    </main>
  )
}
