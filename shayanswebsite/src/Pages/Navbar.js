import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useRef } from "react";
import { HashLink as Link} from 'react-router-hash-link'
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/Navbar.css";
import logo from "../Images/Logo.png"

function Navbar() {

    const navRef = useRef();
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="active">
			<Link className="imageLink" smooth to="/#"><img src={logo} alt="logo"/></Link>
			<nav ref={navRef}>
				<Link className="Link" smooth to="/#" >Home</Link>
				<Link className="Link" smooth to="#AboutUs" >About Us</Link>
				<Link className="Link" smooth to="#Our-Services" >Services</Link>
				<Link className="Link" smooth to="#Portfolio" >Portfolio</Link>
				<Link className="Link" smooth to="#Pricing" >Pricing</Link>
				<Link className="Link" smooth to="#ContactUs" >Contact Us</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

		</header>
	);
}

export default Navbar;