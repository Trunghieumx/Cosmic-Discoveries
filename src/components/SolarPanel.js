import './SolarPanel.css'
import ic1 from '../assets/image/Sun.png'
import ic2 from '../assets/image/Mercury.png'
import ic3 from '../assets/image/Venus.png'
import ic4 from '../assets/image/Earth.png'
import ic5 from '../assets/image/Mars.png'
import ic6 from '../assets/image/Jupiter.png'
import ic7 from '../assets/image/Saturn.png'
import ic8 from '../assets/image/Uranus.png'
import ic9 from '../assets/image/Neptune.png'
function SolarPanel({ onExplore }) {
    return (
        <div className="solar-panel" onClick={onExplore}>
            <div className="solar-content">
                <div className="planet">
                    <img src={ic1} alt="Sun" />
                    <span className="planet-name">Sun</span>
                </div>
                <div className="planet">
                    <img src={ic2} alt="Mercury" />
                    <span className="planet-name">Mercury</span>
                </div>
                <div className="planet">
                    <img src={ic3} alt="Venus" />
                    <span className="planet-name">Venus</span>
                </div>
                <div className="planet">
                    <img src={ic4} alt="Earth" />
                    <span className="planet-name">Earth</span>
                </div>
                <div className="planet">
                    <img src={ic5} alt="Mars" />
                    <span className="planet-name">Mars</span>
                </div>
                <div className="planet">
                    <img src={ic6} alt="Jupiter" />
                    <span className="planet-name">Jupiter</span>
                </div>
                <div className="planet">
                    <img src={ic7} alt="Saturn" />
                    <span className="planet-name">Saturn</span>
                </div>
                <div className="planet">
                    <img src={ic8} alt="Uranus" />
                    <span className="planet-name">Uranus</span>
                </div>
                <div className="planet">
                    <img src={ic9} alt="Neptune" />
                    <span className="planet-name">Neptune</span>
                </div>
            </div>
            <div className="orbit"></div>
        </div>
    );
}

export default SolarPanel;
