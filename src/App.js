import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    this.getVenues()
    this.loadMap()
  }

  loadMap = () => {
    const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    loadScript(`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapsKey}&callback=initMap`)
    window.initMap = this.initMap;
  }

  getVenues = () => {
    const foursquareClientId = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
    const foursquareClientSecret = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: `${foursquareClientId}`,
      client_secret: `${foursquareClientSecret}`,
      query: "breweries",
      near: "Duluth, Minnesota",
      v: "20181811"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
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
