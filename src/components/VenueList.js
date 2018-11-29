import React from 'react';
import ListItem from './ListItem.js';

const VenueList = ({ breweries, whenSideBarBreweryClicked, infowindow, content}) => {
  return (
    <ol id="venueList">
      {breweries &&
        breweries.map((brewery) => (
          <ListItem
            key={brewery.venue.id}
            venue={brewery.venue}
            infowindow={infowindow}
            content={content}
            whenSideBarBreweryClicked={whenSideBarBreweryClicked}
          />
        ))}
    </ol>
  );
};


export default VenueList;
