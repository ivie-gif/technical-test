import { ring } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Tooltip } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import axios from "axios";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { scaleQuantize } from "d3-scale";
import allstates from "./allstates.json";
import "./index.css";

const stateValue = {
  ABIA: '6010',
  ADAMAWA: '6000',
  ANAMBRA: '30000',
  'CROSS RIVER': '90900',
  RIVERS: '323',
  LAGOS: '220'
}



const geoUrl = `https://raw.githubusercontent.com/deldersveld/topojson/master/countries/nigeria/nigeria-states.json`;


const colorScale = scaleQuantize()
  .domain([0.09, 0.41])

  .range(["#64CCFF", "#0AA83F", "#D62B3C", "#802334"]);



export default function MapChart() {
  const [, setPosition] = useState({
    coordinates: [9.0, 8.6],
    zoom: 1,
  });

  const [mapValue, setMapValue] = useState();


  useEffect(() => {
    const response = async () => {
      const data = await axios.get(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map"
      );
      setMapValue(data.data);
    };
    response();
  }, []);
// console.log(mapValue)

  const handleMoveEnd = (position) => {
    setPosition(position);
  };



  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        height: "800px",
        borderRadius: "13px",
        border: "1px solid #393C4A",
        backgroundColor: "#1B1F30",
      }}
    >
      {/*Icons */}
      <section style={{
          marginTop: "45px",
          position: "absolute",
          bottom: -100,
          right: 130,
        }}>

      <div style={{height: '30px', width: '35px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#FFFFFF'}}>
      <AddIcon w={15} h={15} color="grey" style={{marginLeft: '10px', padding: '7px 0px 5px 0px'}} />
      </div>
      <div style={{height: '30px', width: '35px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', backgroundColor: '#FFFFFF', marginTop: '7px'}}>
      <MinusIcon w={15} h={15} color="grey" style={{marginLeft: '10px', padding: '7px 0px 5px 0px'}} /> 
      </div>
      </section>



      {/* color code */}
      <div
        style={{
          marginTop: "45px",
          position: "absolute",
          bottom: -600,
          right: 150,
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="div-col1"></div>
          <div className="text-color">
            <p>APC</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="div-col2"></div>
          <div className="text-color">
            <p>LP</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="div-col3"></div>
          <div className="text-color">
            <p>PDP</p>
          </div>
        </div>
      </div>
      <ComposableMap
        width={3000}
        height={3000}
        projectionConfig={{
          scale: 5000,
        }}
        style={{ width: "176%", height: "auto", marginLeft: "-963px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const cur = allstates.find(
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
                      
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allstates.find(
                  (s) => Number(s.val) === Number(geo.properties.ID_1)
                );
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur && (
                      <>
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={16} textAnchor="middle" style={{fontFamily: 'Inter'}}>
                          {cur.id}
                        </text>
                       
                      </Marker>
                        <Marker coordinates={centroid}>
                       
                        <text y="16" fontSize={16} textAnchor="middle" style={{fontFamily: 'Jost', marginTop: '35px', lineHeight: '20px'}}>
                          {stateValue[cur.id]}
                        </text>
                      </Marker>
                      </>
                    )}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>

    </div>
  );
}
