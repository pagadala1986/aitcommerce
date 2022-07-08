import react from "../../assets/banners/react_training.jpg";
import angular from "../../assets/banners/angular_training.jpg";
import fullstack from "../../assets/banners/full_stack_development.jpg";

const Slider = () => {
    return (
        <>
            {/*  Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                 {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

             {/* The slideshow/carousel  */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={react} alt="Los Angeles" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={angular} alt="Chicago" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={fullstack} alt="New York" className="d-block w-100" />
                    </div>
                </div>

                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}

export default Slider;