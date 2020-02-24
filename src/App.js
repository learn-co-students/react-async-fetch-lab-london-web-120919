// create your App component here
import React, { Component } from 'react';
import Astronaut from './Astronaut';

const API = "http://api.open-notify.org/astros.json"

class App extends Component {
    constructor() {
        super();
        this.state = { 
            astronauts: []
         }
    } 

    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(astros => this.setState({
            astronauts: astros.people
        }) )
    }

    mapAstronauts(){
        return this.state.astronauts.map(astro => < Astronaut astronaut={astro} />)
    }
    render() { 
        console.log(this.state.astronauts)
        return (<div> 
            { this.mapAstronauts()}
        </div>  );
    }
}
 
export default App;