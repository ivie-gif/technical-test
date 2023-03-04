import React, { useState } from "react";
// import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import colorCodes from './colorCodes.json'
import { geoCentroid } from "d3-geo";
import Styles from "./index.module.css";


const geoUrl = `https://raw.githubusercontent.com/deldersveld/topojson/master/countries/nigeria/nigeria-states.json`;

const MapContent = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <p className={Styles.textCandidate}>
            CANDIDATES BY GEOPOLITICAL ZONES
          </p>
        <ComposableMap
        width={900}
        height={1500}
        projectionConfig={{
          scale: 2000,
        }}
        style={{ width: "230%", height: "auto", marginLeft: '-350px', marginTop: '-100px'}}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const cur = colorCodes.find(
                  (s) => Number(s.val) === Number(geo.properties.ID_1)
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={cur ? cur.bg : "#64CCFF"}
                    style={{
                      // default: { fill: "#06F" },
                      hover: { stroke: "#34b7f8", strokeWidth: 3},
                      pressed: { fill: "#64CCFF" },
                      color: "#FFFFFF",
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = colorCodes.find(
                  (s) => Number(s.val) === Number(geo.id)
                );
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur && (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    )}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
        </div>

        <div style={{marginTop: '120px', marginLeft: '-7px'}}>
          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>

          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie2}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>

          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie3}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>

          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie4}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>

          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie5}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>

          <div style={{display: 'flex'}}>
            <div className={Styles.colorDivPie6}></div>
            <div><h3 className={Styles.colorPieTxt}>North East</h3></div>
            <div><h3 className={Styles.colorPieNum}>3,000</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContent;
