import Header from './components/header/header'
import './components/styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
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
      </div>
    </main>
  )
}
