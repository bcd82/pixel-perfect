import { Component } from "react";
import { mapService } from "../services/map.service";
import { MyMap } from "../cmps/Map";
import { Modal } from "../cmps/Modal";

export class MapPage extends Component {
  state = {
    markers: [],
    isModalShown: false,
    clickedPos: {},
    center:{}
  };

  async componentDidMount() {
    this.loadMarkers();
  }

  async loadMarkers() {
    try {
      const markers = await mapService.getMarkers();
      this.setState({ markers });
    } catch (err) {
      console.log("error getting markers: ", err);
    }
  }

  onAddMarker = async (name) => {
    
    if (!name) return;
    const marker = {
      name,
      pos:this.state.clickedPos
    };
    try {
      await mapService.addMarker(marker);
      this.setState({ markers: [...this.state.markers, marker] });
      this.onToggleModal()
    } catch (err) {
      console.log("error adding marker", err);
    }
  };
  
  onToggleModal = (mapProps, map, clickEvent) => {
    if (this.state.isModalShown) return this.setState({ isModalShown: false });
    const pos = {
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng(),
    };
    this.setState({ clickedPos: pos, isModalShown: true });
  };

  render() {
    const { markers,clickedPos, isModalShown,center } = this.state;
    return (
      <>
        <section className="map">
          <MyMap markers={markers} onAddMarker={this.onToggleModal} center={center}/>
        </section>
        my markers :
        <div className="marker-list">
          {markers.map(marker => <item className="place" onClick={()=>this.setState({center:marker.pos})}>
            <p>{marker.name}</p>
          </item>)}
        </div>
        {isModalShown && <Modal onAddMarker={this.onAddMarker} clickedPos={clickedPos} onToggleModal={this.onToggleModal}/>}
      </>
    );
  }
}
