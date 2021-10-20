import { storageService } from "./storage.service"

export const mapService = {
    getMarkers,
    addMarker,
}

const DB_KEY = 'marker'

const gMarkers = [
    {
        _id: 'm-01',
        pos: {
            lat: 32.0486561005543,
            lng: 34.798752569068206,
        },
        name: "Tel-Aviv",
    },
    {
        _id: 'm-02',
        pos: {
            lat: 40.74876952476417,
            lng: -73.98592039347554,
        },
        name: "Manhatten",
    },
    {
        _id: 'm-03',
        pos: {
            lat: 32.18442913243363,
            lng: 34.86967681253942,
        },
        name: "R'aanana",
    },
];

async function getMarkers() {
    console.log('fetching markers')
    const storeMarkers = storageService.loadFromStorage(DB_KEY)
    const markers = storeMarkers?.length ? storeMarkers : gMarkers
    if (!storeMarkers?.length) storageService.saveToStorage(DB_KEY, markers)
    return Promise.resolve(markers);
}

async function addMarker(marker) {
    console.log(marker)
    const markers = storageService.loadFromStorage(DB_KEY)
    markers.push(marker)
    storageService.saveToStorage(DB_KEY, markers)
    return Promise.resolve()
}