import React, { Component } from 'react';
import ListItem from './ListItem.js';

class VenueList extends Component {
  render() {
    return (
      <ol id="venueList">
        {this.props.breweries &&
          this.props.breweries.map((brewery, key) => (
            <ListItem key={key} brewery={brewery}/>
          ))}
      </ol>
    );
  }
}

export default VenueList;
