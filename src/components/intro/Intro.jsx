import "./styles.scss"

export default function Intro () {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/robot.png" alt="logo"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Mohammad</h1>
                    <h3>Software Developer <span>& </span>Robotics Engineer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="scroll down" />
                </a>
            </div>
        </div>
    )
}