import Map from 'ol/Map.js';
//import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';

/*
const vectorLayer = new VectorLayer({
    source: new VectorSource({
        url: '.layers/bud.geojson',
        format: new GeoJSON(),
    }),
    style: {
        fill: new Fill({
            color: 'rgba(255, 0, 0, 0.7)',
        }),
        stroke: null,
      },
})

const map = new Map({
    layers: [vectorLayer],
    target: 'map',
    view: new View({
        center: [52.05118, 20.43199],
        zoom: 4,
     }),
}); 
*/


var map = new Map({
    target: 'map',
    layers: [
        new layer.Vector({
            title: 'budynki',
            source: new source.GeoJSON({
                projection: 'EPSG:2180',
                url: 'layers/bud.geojson',
            })
        })
    ],
    view: new View({
        center: [52.05118, 20.43199],
        zoom: 4,
    })
})