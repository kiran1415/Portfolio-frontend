import React from 'react'

const Hero = () => {
    return (
            <div className="bg-home bg-light clip-home" id="home">
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                            <div className="title-heading text-center text-md-start">
                                <h1 className="heading mb-3">I Am <span id="typed" className="text-primary"></span></h1>
                                <p className="text-muted h6 font-weight-normal">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <div className="mt-4 pt-2">
                                    <a href="javascript:void(0)" className="btn btn-primary rounded mb-2 me-2">Hire me</a>
                                    <a href="javascript:void(0)" className="btn btn-outline-primary rounded mb-2">Download CV <i data-feather="download" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 order-1 order-md-2">
                            
                        </div>
                    </div>
                </div>
                <a href="#about" data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
                    <span className="wheel position-relative d-block mover"></span>
                </a>
            </div>


    )
}

export default Hero
