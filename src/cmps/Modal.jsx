import { useState } from "react";

export function Modal({ onAddMarker, clickedPos, onToggleModal }) {
  const [name, setName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAddMarker(name);
  }

  return (
    <div className="overlay fade-in" onClick={onToggleModal}>
      <section className="form" onClick={(ev) => ev.stopPropagation()}>
          <div className="closer" onClick={onToggleModal}/>
          <h4>Add a marker</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Name the marker"
            autoFocus
          />
          <button>Add Marker</button>
        </form>
        <p>lat: {clickedPos.lat.toFixed(2)} |  lng: {clickedPos.lng.toFixed(2)} </p>
        <p>  </p>
      </section>
    </div>
  );
}
