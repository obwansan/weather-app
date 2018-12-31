import React, {Component} from 'react';

class GoogleMap extends Component {
  // A lifecycle method that is called automatically after the
  // component has been rendered to the screen.
  componentDidMount() {
    // How to create an embedded google map.
    // The first argument is where to render the embedded map, the second
    // is an 'options object' containing the maps config.
    // We get the lat and lng from the objects returned in the JSON
    // from the API.
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // Accessed using this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
