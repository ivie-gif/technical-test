import { ring } from "@chakra-ui/react";
import React, {useState} from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { geoCentroid } from 'd3-geo';
import { scaleQuantize } from 'd3-scale';
import allstates from './allstates.json'
import './index.css'

const geoUrl = `https://raw.githubusercontent.com/deldersveld/topojson/master/countries/nigeria/nigeria-states.json`

const colorScale = scaleQuantize()
  .domain([0.09, 0.41])

  .range(['#64CCFF', '#0AA83F', '#D62B3C', '#802334']);


export default function MapChart() {

  const [position, setPosition] = useState({
    coordinates: [9.0, 8.6],
    zoom: 1,
  });
  const handleMoveEnd = (
    position
  ) => {
    setPosition(position);
  };

  return (
    <div style={{ width: '70%',margin: 'auto',  height: '782px', border: '1px solid #393C4A', backgroundColor: '#1B1F30'}}>
    <ComposableMap
    width={3000}
          height={3000}
          projectionConfig={{
            // rotate: [-10, 0, 0],
            scale: 5000,
            // center: [0,3]
          }} 
          style={{width: "176%", height: "auto", marginLeft: '-763px'}}
          >
            {/* <ZoomableGroup
            zoom={position.zoom}
            // center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          > */}
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
          {geographies.map((geo) =>  { 
           const cur = allstates.find(s => Number(s.val) === Number(geo.properties.ID_1));
          //  console.log(cur && cur.bg, 'hggjgj')
          return(
            
            <Geography key={geo.rsmKey} geography={geo} 
            // fill={colorScale(cur ? 'blue' : 'green')}
          
            fill={cur ? cur.bg : '#64CCFF'}
            style={{
              // default: { fill: "#06F" },
              hover: { border: "1px solid #64CCFF" },pressed: { fill: "#64CCFF" }, color: "#FFFFFF"
            }}
              />
          )
          })}
             {geographies.map((geo) => {
            const centroid = geoCentroid(geo);
            const cur = allstates.find(s => Number(s.val) === Number(geo.properties.ID_1));
            return (
              <g key={geo.rsmKey + '-name'}>
                        {cur && (
                          <Marker coordinates={centroid}>
                            <text y="2" fontSize={14} textAnchor="middle">
                              {cur.id}
                            </text>
                          </Marker>
                        )}
                      </g>
            )
          })
        }
          </>
        )
          
        }
      </Geographies>
      {/* </ZoomableGroup> */}
    </ComposableMap>
    </div>
  )
}