import React, { Component } from 'react';

class ListItem extends Component {

  render() {
  	console.log(this.props.venue)
    return (
      <li
        aria-labelledby={this.props.venue.name}
        tabIndex="0"
        className="listItem"
        onClick={() => this.props.whenSideBarBreweryClicked(this.props.venue)}>
        {this.props.venue.name}
      </li>
    );
  }

}

export default ListItem;
