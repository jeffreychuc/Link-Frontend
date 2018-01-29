import React from 'react';
import shortid from 'shortid';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { shelterData, foodData, clinicData } from './data.js';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';



export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      shelterMarkers: shelterData,
      foodMarkers: foodData,
      clinicMarkers: clinicData
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {
    // axios.get('https://impacthub-first.herokuapp.com/locations/shelter')
    // .then(function (response) {
    //   console.log('success');
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log('wtf');
    //   console.log(error);
    // });
    // this.setState({shelterMarkers: shelterData, foodMarkers: foodData, clinicMarkers: clinicData});
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  render() {
    return this.props.google ? (
      <div className='mapFrame'>
        <h2 className='header'>Nearby Services</h2>
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            style={{margin: '0 auto', width: '90%', height: '90%', position: 'relative'}}
            className={'map'}
            zoom={15}>
          {this.props.renderShelters ? this.state.shelterMarkers.map((shelter) => (
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
          )): null}

          {this.props.renderFood ? this.state.foodMarkers.map((food) => (
            <Marker
            onClick={this.onMarkerClick}
            key={shortid.generate()}
            name={food.name}
            address={food.formatted_address}
            position={food.geometry.location}
            icon={{
              url: "assets/food_pin.png",
              anchor: new this.props.google.maps.Point(32,32),
              scaledSize: new this.props.google.maps.Size(64,64)
            }} />
          )): null}

          {this.props.renderClinics ? this.state.clinicMarkers.map((clinic) => (
            <Marker
            onClick={this.onMarkerClick}
            key={shortid.generate()}
            name={clinic.name}
            address={clinic.formatted_address}
            position={clinic.geometry.location}
            icon={{
              url: "assets/clinic_pin.png",
              anchor: new this.props.google.maps.Point(32,32),
              scaledSize: new this.props.google.maps.Size(64,64)
            }} />
          )) : null}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div className='mapCallout'>
                <h2>{this.state.selectedPlace.name}</h2>
                <h3>{this.state.selectedPlace.address}</h3>
              </div>
          </InfoWindow>

        </Map>
        {/* <Contact /> */}
      </div>
    ) : (<div>loading</div>);
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);
