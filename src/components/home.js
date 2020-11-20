import React, { Component } from 'react';
import Header from './header'
import '../App.css'
import Child from "./child"

class HomePage extends Component {
    constructor(){
        super()
        this.state = {
          adds: [
              {img: "https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg",
                price: "120000",
                des : "lorem usfsfs fsfssf sdsdv sds",
                loc : "Karachi"
                },
                {img: "https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg",
                price: "1200",
                des : "lorem usfsfs fsfssf sdsdv sds",
                loc : "Lahore"
                },
            ]
        }
      }

      
    render() {
        return (
            <div className="home-page">
                <Header/>
                <div className="hero"></div>
                <div className="fresh_recommendations">
                    <h3>Fresh Recommendations</h3>
                    <div style={{display:"flex", flexWrap:"wrap"}}>
                        
      
      
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;