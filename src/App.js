import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.loadMap()
  }

  loadMap = () => {
    const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    loadScript(`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapsKey}&callback=initMap`)
    window.initMap = this.initMap;
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.785039, lng: -92.107418},
      zoom: 8
    });
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>

    );
  }
}

const loadScript = (source) => {
  const firstScriptTag = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = source;
  script.async = true;
  script.defer = true;
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag)
}

export default App;
