import React, { Component } from 'react';
import './App.css';
import SideBar from "./SideBar.js"
import Body from "./BodyPage.js"


class App extends Component {
    render() {
        return (
            <div>

            <div className="sidebar">
                <SideBar/>
            </div>

            <div>
                <Body/>
            </div>
            </div>
        );
    }
}

export default App;
