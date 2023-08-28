import React from 'react'
import Image from 'next/image'
import './header.scss'

function Header() {
    return ( 
        <div className="header">
        <div>
          <h1>Olá, eu sou Guilherme Noé</h1>
          <h2>Front End Developer</h2>

        </div>
        <Image
          src="/perfil.jpeg"
          alt="Next.js Logo"
          width={325}
          height={320}
          priority
        />
      </div>
     );
}

export default Header;