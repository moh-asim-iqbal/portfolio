import { Fragment, useState } from "react";
import { FaReact, FaNode, FaServer } from "react-icons/fa";
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
          techName: ["React", "Node", "Express"],
          techIcon: [FaReact, FaNode, FaServer],
        },
        {
          id: "2",
          icon: "./assets/github-logo.png",
          title: "Autonomous Air Hockey Table",
          desc:
            "Fully functional and discretly packaged robotic air hockey table that allows for autonomous, assisted (with input blending), or regular play.",
          img:
            "./assets/care-hockey.png",
          techName: ["React", "Node", "Express"],
          techIcon: [FaReact, FaNode, FaServer],
        },
        {
          id: "3",
          icon: "./assets/github-logo.png",
          title: "Path Planning for Robotic Manipulator",
          desc:
            "Algorithm that takes start and end coordinates and charts optimal joint configurations, while avoiding specifed obstacles.",
          img:
            "./assets/scara.jpg",
          techName: ["React", "Node", "Express"],
          techIcon: [FaReact, FaNode, FaServer],
        },
        {
          id: "4",
          icon: "./assets/github-logo.png",
          title: "Credit Card Fraud Detection using Machine Learning",
          desc:
            "Compared various ML algorithms for optimal performance. Obtained fraud detection precision of 78.5% using Random Forest.",
          img:
            "./assets/ai.png",
          techName: ["React", "Node", "Express"],
          techIcon: [FaReact, FaNode, FaServer],
        },
      ];
   
    const handleClick = dir => {
        dir === "left" ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1: 3)
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
                                <div className="info">
                                  <h2>{d.title}</h2>
                                  <p>{d.desc}</p>
                                </div>
                                <span>Technologies Used</span>
                                <div className="icon-container">
                                  {d.techName.map( (n,idx) => {
                                    const Icon = d.techIcon[idx]

                                    return (
                                      <div className="icon-item">
                                        <Icon/><p>{n}</p>
                                        
                                      </div>
                                    )
                                  })}
                                </div>
                                
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