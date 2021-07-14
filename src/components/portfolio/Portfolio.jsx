import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "cinema-app",
            title: "Cinema App",
        },
        {
            id: "portfolio-website",
            title: "Portfolio Website",
        },
        {
            id: "path-planning",
            title: "Robotic Arm Path Planning",
        },
        {
            id: "air-hockey",
            title: "Autonomous Air Hockey Table",
        }
        
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map( item => (
                    <PortfolioList title={item.title} id={item.id} />
                ))}
            </ul>

            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    
                </div>
            </div>
        </div>
    )
}