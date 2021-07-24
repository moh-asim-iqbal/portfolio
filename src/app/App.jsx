import { useState, useRef} from 'react'
import useOnScreen from './onscreen.js'
import Topbar from '../components/Topbar/Topbar'
import Intro from '../components/intro/Intro'
import Portfolio from '../components/portfolio/Portfolio'
import Menu from '../components/menu/Menu'
import './styles.scss'
function App () {
    const [menuOpen, setMenuOpen] = useState(false)
    const ref = useRef(null)
    const onScreen = useOnScreen(ref,"-100px")

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} title={onScreen ? 'Portfolio' : 'Home'}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro />
                <Portfolio ref={ref}/>
            </div>

        </div>
    )
}

export default App