import { useState } from "react";
import "./portfolio.scss"

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: "./assets/github-logo.png",
          title: "Best-By App",
          desc:
            "Web based grocery management system focusing on food waste prevention.",
          img:
            "./assets/best-by-add.png",
        },
        {
          id: "2",
          icon: "./assets/github-logo.png",
          title: "Autonomous Air Hockey Table",
          desc:
            "Algorithm that takes start and end coordinates and charts optimal path, while avoiding specifed obstacles.",
          img:
            "./assets/care-hockey.png",
        },
        {
          id: "3",
          icon: "./assets/github-logo.png",
          title: "Path Planning for Robotic Manipulator",
          desc:
            "Algorithm that takes start and end coordinates and charts optimal path, while avoiding specifed obstacles.",
          img:
            "./assets/manipulator-path.png",
        },
      ];
   
    const handleClick = dir => {
        dir === "left" ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1: 2)
            : setCurrentSlide(currentSlide< data.length - 1 ? currentSlide + 1 : 0)
    }
    
    return (
        <div className="portfolio" id="portfolio">
           <div 
            className="slider"
            style={{transform: `translateX(-${currentSlide *100}vw)`}}
            > 
            {data.map( d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="icon" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Technologies Used</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="displayContainer">
                              <img src={d.img} alt="logo" />
                            </div>
                        </div>
                        
                    </div>

                </div>))}
           </div>
           <img src="assets/arrow.png" className="arrow-left" alt="left arrow" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow-right" alt="right arrow" onClick={() => handleClick("right")}/>    
        </div>
    )
}