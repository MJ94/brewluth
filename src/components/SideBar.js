import React, { Component } from 'react';
import VenueList from './VenueList.js';

class Sidebar extends Component {
  render() {
    return (
      <aside id="sideBarContainer">
        <h1 id="sideBarHeader">Duluth, MN</h1>
        <label>Search Breweries</label>
        <input id="filter" type="search" placeholder="Brewery"></input>
        <VenueList
          {...this.props}
          whenSideBarBreweryClicked={this.props.whenSideBarBreweryClicked}
          />
      </aside>
    );
  }

}

export default Sidebar;
