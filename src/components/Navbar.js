import React from 'react'

const Navbar = () => {
    return (
        <div>
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    		<div className="container">
            <a class="navbar-brand" href="#">
                    <img src={'images/logo.png'} height="18" alt=" " />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span data-feather="menu" className="fea icon-md"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav navbar-nav-link mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div> 
            </div>
		</nav>
        </div>
    )
}

export default Navbar
