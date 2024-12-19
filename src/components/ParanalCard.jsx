import img from "../assets/image/Paranal.jpg"
import "./ParanalCard.css"
function ParanalCard() {
    return ( 
        <div className="paranal-card">
            <div className="ob-container">
                <img src={img} alt="" />
                <div className="blur"></div>
            </div>
            <div className="infor1">
                <div className="title">
                Location</div>
                <div className="content">
                Atacama Desert, Chile, one of the driest places on Earth.</div>
                <div className="content">
                Located at an altitude of 2,635 meters on the top of Cerro Paranal</div>
                <div className="title">
                Facilities</div>
                <div className="content">
                Includes 4 main telescopes, each 8.2 meters in diameter.</div>
                <div className="title">
                Auxiliary telescope</div>
                <div className="content">
                4 auxiliary glasses with a diameter of 1.8 meters, support the VLT interferometer.</div>
            </div>
            <div className="infor2">
                <div className="title">
                Technology and features</div>
                <div className="content">
                Use adaptive optics technology to reduce the effects of atmospheric turbulence.</div>
                <div className="content">
                The optical interferometer system helps produce images with the same resolution as a telescope with a diameter equivalent to 200 meters.</div>

            </div>
            <div className="infor3">
                <div className="title">
                Objectives and research</div>
                <div className="content">
                Study the formation and evolution of galaxies.</div>
                <div className="content">
                Analysis of exoplanets and nearby stars.</div>
                <div className="content">
                Observe special cosmic phenomena such as black holes, supernovae, and quasars.</div>
            </div>
            <div className="infor4">
                <div className="title">
                Outstanding achievements</div>
                <div className="content">
                Contribute to research measuring the expansion of the universe.</div>
                <div className="content">
                Capture direct images of extrasolar planets.</div>
            </div>
        </div>
     );
}

export default ParanalCard;