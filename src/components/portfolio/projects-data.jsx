import { FaReact, FaNode, FaServer, FaDatabase} from 'react-icons/fa';
import './projects-data.scss'

export const data = [
    {
      id: "1",
      icon: "./assets/github-logo.png",
      title: "Best-By App",
      desc:
        "Web based grocery management system focusing on food waste prevention.",
      img:
        "./assets/best-by-add.png",
      techIcon: [
        <div className="tech-item">
          <p>ReactJS</p>
          <FaReact size={28}/>
        </div>,
        <div className="tech-item">
          <p>Node.js</p>
          <FaNode size={28}/>
        </div>,
        <div className="tech-item">
          <p>Express</p>
          <FaServer size={28}/>
        </div>,
        <div className="tech-item">
          <p>MongoDB</p>
          <FaDatabase size={28}/>
        </div>,
      ]
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
      title: "Credit Card Fraud Detection using Machine Learning",
      desc:
        "Compared various ML algorithms for optimal performance. Obtained fraud detection precision of 78.5% using Random Forest.",
      img:
        "./assets/ai.png",
      techName: ["React", "Node", "Express"],
      techIcon: [FaReact, FaNode, FaServer],
    },
    {
      id: "4",
      icon: "./assets/github-logo.png",
      title: "Portfolio Website",
      desc:
        "Simple portfolio website.",
      img:
        "./assets/logo-og.png",
      techIcon: [
        <div className="tech-item">
          <p>ReactJS</p>
          <FaReact size={28}/>
        </div>,
      ]
    },
    {
      id: "5",
      icon: "./assets/github-logo.png",
      title: "Path Planning for Robotic Manipulator",
      desc:
        "Algorithm that takes start and end coordinates and charts optimal joint configurations, while avoiding specifed obstacles.",
      img:
        "./assets/scara.jpg",
      techName: ["React", "Node", "Express"],
      techIcon: [FaReact, FaNode, FaServer],
    },
  ];