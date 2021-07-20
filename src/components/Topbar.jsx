import { useState, useEffect } from "react"
import "./styles.scss"

function Topbar({menuOpen, setMenuOpen, title}) {
    const [currTitle, setCurrTitle] = useState('Welcome')
    useEffect(()=> {
        setCurrTitle(title)
    }, [title])
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                   
                
                </div>
                <h1>{currTitle}</h1>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar