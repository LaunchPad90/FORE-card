import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


// const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.73,
      lng: -104.99
    },
    zoom: 11
  };
  
  
  render() {
      console.log('{}{}{}{}{}}{', process.env.REACT_APP_GOOGLE_API_KEY)
      const handleApiLoaded = (map, maps) => {
        console.log(map, maps)
    };
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => console.log('MAP', map, 'MAPS', maps)}
          >
          {/* <Marker
            lat={39.7392}
            lng={104.9903}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




// export class SimpleMap extends React.Component {
// render() {
//   return (
//     <Map google={this.props.google} zoom={14}>

//       <Marker onClick={this.onMarkerClick}
//               name={'Current location'} />

//       <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//       </InfoWindow>
//     </Map>
//   );
// }
// }


// export default GoogleApiWrapper({
//   apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
// })(SimpleMap)