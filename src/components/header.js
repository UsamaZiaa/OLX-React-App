import React, { Component } from 'react';
import '../App.css'
import '../header.css'
import {Link, NavLink} from 'react-router-dom'
// import login from '../components/login'

class Header extends Component {
    render() {
        return (
            <div>
            {/* // Header ========================================= */}
            <div style={{margin: "auto"}}>
            <div className="header flex fixed sticky"> 
                <div><NavLink to="/" exact>< img className="olx-logo" src={require("../img/olx.png")}/></NavLink></div>
                <div className="location">
                    <img className="search-icon" src={require("../img/icons/loupe.svg")}/>
                    <input className="location-field" type="text" value="Pakistan"></input>                    
                    <img className="down-shevron" src={require("../img/icons/down-chevron.png")}/>
                </div>
                <div className="search">
                    <input className="search-field" type="text" placeholder="Find Cars, Mobile Phones and More..." />
                    <img className="search-icon2" src={require("../img/icons/loupe2.svg")}></img>
                </div>
                <div>
                    <NavLink to="/login" exact className="link">Login</NavLink>
                </div>
                <div>
                    <button className="headerBtn"><img className="plus-icon" src={require("../img/icons/plus.svg")}/>SELL</button>
                </div>
           </div>
           </div>
                {/* // Menu ===================================================== */}
                <div className="menu flex">
                    <div>
                        <button className="text14 bold menuBtn">ALL CATEGORIES  <img className="down-shevron" src={require("../img/icons/down-chevron.png")}/></button>                        
                    </div>
                    <div className="text14">
                        <NavLink className="menu_links" to="/mobile_phones">Mobile Phones</NavLink>
                        <NavLink className="menu_links" to="/cars">Cars</NavLink>
                        <NavLink className="menu_links" to="/motorcycle">Motorcycles</NavLink>
                        <NavLink className="menu_links" to="/house">Houses</NavLink>
                        <NavLink className="menu_links" to="/tv_video_audio">TV-Audio-Video</NavLink>
                        <NavLink className="menu_links" to="/tablet">Tablets</NavLink>
                        <NavLink className="menu_links" to="/landPlot">Land &amp; Plots</NavLink>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Header;