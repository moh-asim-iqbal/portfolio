import { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"

import Topbar from '../components/Topbar'
import Intro from '../components/intro/Intro'
import Portfolio from '../components/portfolio/Portfolio'
import Menu from '../components/menu/Menu'
import './app.scss'
function App () {
    const [menuOpen, setMenuOpen] = useState(false)
    const [title, setTitle] = useState('Welcome')

    // eslint-disable-next-line
    useEffect( () => {
        
        window.location.hash === "#portfolio" ?
        setTitle('Portfolio') :
        setTitle('Welcome')
        
    })
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} title={title}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro />
                <Portfolio />
            </div>

        </div>
    )
}

export default withRouter(App)