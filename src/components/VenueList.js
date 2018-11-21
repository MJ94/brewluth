import React, { Component } from 'react';
import ListItem from './ListItem.js';

class VenueList extends Component {

  render() {
    return (
      <ol className="venueList">
        <ListItem />
      </ol>
    );
  }

}

export default VenueList;
