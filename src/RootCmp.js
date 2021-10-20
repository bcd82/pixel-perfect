import {MapPage} from './pages/MapPage';


export function RootCmp() {
  return (
    <section className="map-app">
      <header className="app-header">
        <p>MapMarkers</p>
      </header>
      <MapPage />
      <footer className="app-footer"/>
    </section>
  );
}


