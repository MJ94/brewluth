import React, { Component } from 'react';
import VenueList from './VenueList.js';

class Sidebar extends Component {

  render() {
    return (
      <div className="sideBar">
        <VenueList />
      </div>
    );
  }

}

export default Sidebar;
