import React, { Component } from 'react';
import L from 'leaflet';
import './App.css';

class App extends Component {
  state = {
    latitude: 37.479964,
    longitude: 127.118795
  }

  componentDidMount() {
    const { latitude, longitude } = this.state;
    this.map = L.map('mapid', {
      center: [latitude, longitude],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return (
      <div id="mapid"/>
    );
  }
}

export default App;
