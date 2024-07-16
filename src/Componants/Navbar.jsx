import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery if not already imported
import "../App.css"
import logo from "../img/logoo.png"

export const Navbar = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // State to track Solutions dropdown

    useEffect(() => {
        // Sticky Navbar
        const handleScroll = () => {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        };

        $(window).on('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleSolutionsToggle = () => {
        setIsSolutionsOpen(!isSolutionsOpen); // Toggle the Solutions dropdown
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <img className='logo_img' src={logo} alt="Logo"></img>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded={!isNavbarCollapsed}
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`}>
                <div className="navbar-nav ms-auto align-items-center">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <div className={`nav-item dropdown ${isSolutionsOpen ? 'show' : ''}`}>
                        <a className="nav-link dropdown-toggle" onClick={handleSolutionsToggle}>Showcase</a>
                        <div className={`dropdown-menu m-0 ${isSolutionsOpen ? 'show' : ''}`}>
                            <Link to='/sap_hxm' className="dropdown-item">Developer communities</Link>
                            <Link to='/hana' className="dropdown-item">Education & Finance</Link>
                            <Link to="/analytics" className="dropdown-item">Tech & Startups</Link>
                            <Link to='/business' className="dropdown-item">Gaming Communities</Link>
                        </div>
                    </div>
                    <li className="nav-item">
                <a target="_blank" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/community" className="nav-link">
                    <button type="button" className="btn btn-primary">Join Community</button>
                </Link>
            </li>
                </div>
            </div>
        </nav>
    )
}
