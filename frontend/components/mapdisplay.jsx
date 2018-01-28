import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {

  }

  onMarkerClick (props, marker, e) {
    console.log('marker was clicked');
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    console.log('map was clicked');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  render() {
    // const google = window.google;
    return this.props.google ? (
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}>
        {/* <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
        <Marker
          name={'Dolores park'}
          position={{lat: 37.759703, lng: -122.428093}} />
        <Marker /> */}
        <Marker
          google={this.props.google}
          name={'Your position'}
          position={{lat: 37.762391, lng: -122.439192}}
          icon={{
            url: "assets/housing_pin.png",
            anchor: new this.props.google.maps.Point(32,32),
            scaledSize: new this.props.google.maps.Size(64,64)
          }} />
      </Map>
    ) : (<div>bull</div>);
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);
