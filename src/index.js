import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import $ from 'jquery';

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
        center: [151.846, 20.854],
        zoom: 1.87,
        // maxZoom: 1,
        attributionControl: false,
        
        // maxBounds: bounds
        });
        // Basic line drawing plotting between points - first tests
        console.log("sdsds")
        map.on('load', function () {
            $.getJSON('./src/points.json', function(data) {
                $.each(data.points, function(index, element) {
                    console.log(element.xValue)
                    console.log(element.yValue)
                    map.addSource('route', {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'properties': {},
                            'geometry': {
                                'type': 'LineString',
                                'coordinates': [
                                    [element.xValue, element.yValue],
                                    [element.xValue, element.yValue]
                                ]
                            }
                        }
                    });
                    map.addLayer({
                        'id': 'route',
                        'type': 'line',
                        'source': 'route',
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': '#ffffff',
                            'line-width': 4000
                        }
                    });
                });
            });
        });

        map.dragRotate.disable();
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