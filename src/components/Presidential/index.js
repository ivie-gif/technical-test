import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import axios from "axios";

const partyColor = {
    "All Progressive Congress": "#64CCFF",
    "Labour Party": "#0AA83F",
    "People's Democratic Party": "#D62B3C",
};

const partyWidth = {
    "All Progressive Congress": "552px",
    "Labour Party": "491px",
    "People's Democratic Party": "225px",
  };

  const partyImage = {
    "All Progressive Congress": "/Images/tinubu.svg",
    "Labour Party": "/Images/obi.svg",
    "People's Democratic Party": "/Images/atiku.svg",
  }; 

  const partyVotes = {
    "All Progressive Congress": "51.3%",
    "Labour Party": "42%",
    "People's Democratic Party": "7.3%",
  }; 

const Index = () => {
  const [presidentialData, setPresidentialData] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await axios.get(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president"
      );
      setPresidentialData(data.data);
    };
    response();
  }, []);
//   console.log(presidentialData, 'prrr99999');

  return (
    <div>
      <div style={{ display: "flex", margin: '0px 55px' }}>
        {presidentialData &&
          presidentialData.map((presidential) => (
            <Tooltip
              hasArrow
              label={
                <div style={{ display: "flex", width: '204.67px', height: '56px', padding: '7px 7px' }}>
                  <div>
                    <img src={partyImage[presidential.political_party_name]} alt="" />
                  </div>
                  <div style={{marginTop: '-15px', marginLeft: '5px'}}>
                    <h3 style={{color: partyColor[presidential.political_party_name], fontSize: '14px', fontFamily: 'Jost', fontWeight: '500'}}>
                      {presidential.full_name}, {''}
                      {presidential.political_party_name}
                    </h3>
                    <h3 style={{fontSize: '14px', fontFamily: 'Jost', fontWeight: '500', marginTop: '-10px'}}>
                        {presidential.candidates_vote} ({partyVotes[presidential.political_party_name]})
                        </h3>
                  </div>
                </div>
              }
              bg="white"
              defaultIsOpen={true}
              isOpen={true}
            >
              <div
                style={{
                  backgroundColor:
                    partyColor[presidential.political_party_name],
                  height: "16px",
                  width: partyWidth[presidential.political_party_name]
                }}
              />
            </Tooltip>
          ))}
      </div>
    </div>
  );
};

export default Index;