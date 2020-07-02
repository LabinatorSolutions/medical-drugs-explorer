import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render() {
    
    return (
	  <React.Fragment>
        <Navbar />
        <main id="main-content">
          <div className="grid-container padding-bottom-4">
            <div className="grid-row padding-4">
              <div className="desktop:grid-col-12" id="ContentDiv padding-bottom-3">
                <div className="grid-row padding-bottom-4 shoPageSection"><Home /></div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;
