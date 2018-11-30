import React, { Component } from 'react';
import VenueList from './VenueList.js';

class Sidebar extends Component {
  state = {
    query: "",
    breweries: []
  }

  filterSidebarBreweries = () => {
    if (this.state.query.trim() !== "") {
      const breweries = this.props.breweries.filter(breweryListing =>
      breweryListing.venue.name.toLowerCase().includes(this.state.query.toLowerCase()));
      console.log(breweries);
      return breweries;
    }
    return this.props.breweries;
  };


  handleUpdate = (e) => {
    this.setState({
      query: e.target.value
    });
    const markers = this.props.breweries.map(breweries => {
      const firstMatch = breweries.venue.name.toLowerCase().includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(
        (marker) => marker.id === breweries.venue.id
      );
      if (firstMatch) {
        marker.setVisible(true);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker.setAnimation(null); }, 750);
      } else {
        marker.setVisible(false);
      }
      return markers;
    });
  };

  render() {
    return (
      <aside id="sideBarContainer">
        <h1 id="sideBarHeader">Duluth, MN</h1>
        <h2 id="sideBarSubHead">Brewluth</h2>
        <label>Search Breweries</label>
        <input
          id="filter"
          type="search"
          placeholder="Brewery"
          onChange={this.handleUpdate}
        />
      <p id="dataAttribution">All external data courtesy of <a href="https://foursquare.com">Foursquare</a> and <a href="https://maps.google.com">Google Maps</a></p>
        <VenueList
          {...this.props}
          whenSideBarBreweryClicked={this.props.whenSideBarBreweryClicked}
          breweries={this.filterSidebarBreweries()}
          />
      </aside>
    );
  }

}

export default Sidebar;
