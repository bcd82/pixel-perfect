import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class _MyMap extends Component {
  state = {
    center:{},
    isInfoWindowOn: false,
    infoText: "",
  };

  onMarkerClicked = (ev) => {
    this.setState({
      isInfoWindowOn: true,
      infoText: ev.name,
      center: ev.position,
    });
  };


  onInfoWindowClose = () => {
    this.setState({ isInfoWindowOn: false });
  };


  render() {
    const { markers, onAddMarker,center } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={markers[0].pos}
        onClick={onAddMarker}
        center={center}
      >
        {markers.length &&
          markers.map((marker, idx) => (
            <Marker
              position={marker.pos}
              name={marker.name}
              onClick={this.onMarkerClicked}
              key={idx}
            />
          ))}
        <InfoWindow
          onClose={this.onInfoWindowClose}
          position={this.state.center}
          visible={this.state.isInfoWindowOn}
        >
          <div>
            <h1>{this.state.infoText}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
// export const changeLocation = (locIdx) => {
//   this.setState({ center: markers[locIdx] });
// };
export const MyMap = GoogleApiWrapper({
  apiKey: "AIzaSyBGe5qrsySPJjOhvi5C5mlAvGe2ywF8ZQg",
})(_MyMap);
