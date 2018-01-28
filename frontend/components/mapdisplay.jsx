import React from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { testData } from './data.js';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      shelterMarkers: []
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {
    axios.get('https://impacthub-first.herokuapp.com/locations/shelter')
    .then(function (response) {
      console.log('success');
      console.log(response);
    })
    .catch(function (error) {
      console.log('wtf');
      console.log(error);
    });
    this.setState({shelterMarkers: testData.results});
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
    return this.props.google ? (
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}>
        {this.state.shelterMarkers.map((shelter) => (
          <Marker
          onClick={this.onMarkerClick}
          key={shortid.generate()}
          name={shelter.name}
          address={shelter.formatted_address}
          position={shelter.geometry.location}
          icon={{
            url: "assets/housing_pin.png",
            anchor: new this.props.google.maps.Point(32,32),
            scaledSize: new this.props.google.maps.Size(64,64)
          }} />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className='mapCallout'>
              <h2>{this.state.selectedPlace.name}</h2>
              <h3>{this.state.selectedPlace.address}</h3>
            </div>
        </InfoWindow>

      </Map>
    ) : (<div>loading</div>);
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);
