import './VenusCard.css'
function VenusCard() {
    return ( 
        <div className="venus-card">
            <div className="planet-container">
                <img src="./images/PlanetVenus.png" alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">Distance from the Sun</div>
                <div className="content">Approximately 108.2 million km</div>
                <div className="title">Orbital Period</div>
                <div className="content">225 Earth days (1 year on Venus)</div>
                <div className="title">Rotation Period</div>
                <div className="content">243 Earth days</div>
                <div className="content">(a day on Venus is longer than its year)</div>
            </div>
            <div className="infor2">
                <div className="title">DIAMETER</div>
                <div className="content">12,104 km</div>
                <div className="content">(about 95% the size of Earth)</div>
                <div className="title">Average Temperature</div>
                <div className="content">Around 475°C (900°F) </div>
                <div className="content">making it the hottest planet in the Solar System</div>
                <div className="title">Gravity</div>
                <div className="content">About 90% of Earth's gravity</div>
            </div>
            <div className="infor5">
                <div className="title">Surface</div>
                <div className="content">Venus has a rocky surface covered with vast plains, volcanic features, and craters</div>
                <div className="content">It has more volcanoes than any other planet, with over 1,600 major volcanic structures identified</div>
                <div className="content">The surface is extremely dry, with no liquid water due to the high temperatures</div>
            </div>
            <div className="infor3">
                <div className="title">Atmosphere</div>
                <div className="content">Venus has a thick atmosphere composed mostly of carbon dioxide (96.5%) and nitrogen (3.5%)</div>
                <div className="content">The atmosphere traps heat through a runaway greenhouse effect, leading to its extreme surface temperatures</div>
                <div className="content">Thick clouds of sulfuric acid obscure the surface and reflect sunlight, making Venus one of the brightest objects in the night sky</div>
            </div>
        </div>
     );
}

export default VenusCard;