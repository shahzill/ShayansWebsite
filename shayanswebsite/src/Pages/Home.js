import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { styles } from "../Styles/Home.css";
import Navbar from "./Navbar";
import videoBG1 from "../Images/VideoBG1.mp4";
import { NavLink } from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link'
import Particles from '../Components/Particles';

function Home() {

    return (    
        <>
        <React.Fragment><Navbar /></React.Fragment>        
        <div className="page1" id="Home">
            <video className="page1-video2" src={videoBG1} autoPlay loop muted />
            <div className="page1-intro center">
                <h1>VisualsBySN</h1>
            </div>
        </div>

        <div className="page2" id="Home"> 
        <Particles id="tsparticles" />
            <div className="page2-sub">
                <div className="page2-header">
                    <h1>Clients</h1>
                </div>
                <div className="page2-clients">
                    <Link className="Link" to="https://twitter.com/iiuniit" target="_blank" ><div className="page2-card page2-card1"></div></Link>
                    <Link className="Link" to="https://x.com/souriano?s=21" target="_blank"><div className="page2-card page2-card2"></div></Link>
                    <Link className="Link" to="https://twitter.com/zTxns" target="_blank"><div className="page2-card page2-card3"></div></Link>
                    <Link className="Link" to="https://twitter.com/Hellonsteam" target="_blank"><div className="page2-card page2-card4"></div></Link>
                    <Link className="Link" to="https://twitter.com/PhantomFNN" target="_blank"><div className="page2-card page2-card5"></div></Link>
                    <Link className="Link" to="https://twitter.com/LitAlvi" target="_blank"><div className="page2-card page2-card6"></div></Link>
                </div>
            </div>
        </div>
        <div className="page3" id="Home"> 
        <div className="page3-sub">
                <div className="page3-header">
                    <h1>Pricing</h1>
                    <h3>Choose the right plan</h3>
                </div>
                <div className="page3-prices">
                    <div className="page3-singlePrice">
                        <div className="page3-header">
                            <h4>Basic</h4>
                        </div>
                        <div className="page3-priceSpecs">
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                        </div>
                    </div>
                    <div className="page3-singlePrice">
                        <div className="page3-header">
                            <h4>Standard</h4>
                        </div>
                        <div className="page3-priceSpecs">
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                        </div>
                    </div>
                    <div className="page3-singlePrice">
                        <div className="page3-header">
                            <h4>Premium</h4>
                        </div>
                        <div className="page3-priceSpecs">
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                            <p>this is expensive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Home;

// navbar
// landing page
// clients
// work
// prices
// <video className="video2" src={videoBG1} autoPlay loop muted />