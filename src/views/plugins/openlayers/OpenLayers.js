import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import Overlay from "ol/Overlay";
import { Point, LineString } from "ol/geom";
import { Icon, Stroke, Style } from "ol/style";
import { Feature } from "ol";

const OpenLayersMap = () => {
  useEffect(() => {
    const markerStyle = new Style({
      image: new Icon({
        anchor: [1, 1],
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
      }),
    });

    const markerA = new Feature({
      geometry: new Point(fromLonLat([106.8456, -6.2088])),
    });

    const markerB = new Feature({
      geometry: new Point(fromLonLat([107.60981, -6.914744])),
    });

    markerA.setStyle(markerStyle);
    markerB.setStyle(markerStyle);

    const lineString = new Feature({
      geometry: new LineString([
        fromLonLat([106.8456, -6.2088]),
        fromLonLat([107.60981, -6.914744]),
      ]),
      style: new Style({
        stroke: new Stroke({
          color: "blue",
          width: 4,
        }),
      }),
    });

    const vectorSource = new VectorSource({
      features: [markerA, markerB, lineString],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const container = document.getElementById("popup");
    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    const map = new Map({
      layers: [osmLayer, vectorLayer],
      target: "map",
      view: new View({
        center: fromLonLat([106.8456, -6.2088]),
        zoom: 3,
      }),
      overlays: [overlay],
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default OpenLayersMap;
