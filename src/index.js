import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmhhY2tzaGF3IiwiYSI6ImNrZmd1MWlkbzBzNXgyem5weHF5dmg4aDYifQ.6e2Is20NCFjCSsfuLyA88w';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
        };
    }
    componentDidMount() {
        // var bounds = [
        //     [90, -90], // Southwest coordinates
        //     [-90, 90] // Northeast coordinates
        //     ];
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/rhackshaw/ckgrpt6jv0gn319s2eltf926y',
        center: [161.846, 18.854],
        zoom: 0.66,
        // maxZoom: 1,
        attributionControl: false,
        // maxBounds: bounds
        });
    }
    render() {
        return (
        <div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
        )
    }
}
     
ReactDOM.render(<Application />, document.getElementById('app'));