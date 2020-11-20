import React from 'react';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import HomePage from '../components/home'
import login from '../components/login';
import mobile from '../components/pages/mobile'
import cars from '../components/pages/cars'
import motorcycle from "../components/pages/motorcycle"
import house from '../components/pages/house'
import tv from '../components/pages/tv'
import tablet from '../components/pages/tablet'
import landPlot from '../components/pages/land and plot'

class AppRouter extends React.Component {
    render(){
        return (
            <Router>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/mobile_phones" component={mobile}/>
                <Route exact path="/cars" component={cars}/>
                <Route exact path="/motorcycle" component={motorcycle}/>
                <Route exact path="/house" component={house}/>
                <Route exact path="/tv_video_audio" component={tv}/>
                <Route exact path="/tablet" component={tablet}/>
                <Route exact path="/landPlot" component={landPlot}/>
            </Router>
        )
    }
}

export default AppRouter;