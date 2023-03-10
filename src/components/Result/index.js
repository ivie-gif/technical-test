import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Index = () => {
const [stateResult, setStateResult] = useState();

useEffect (() => {
    const response = async () => {
        const data = await axios.get(  
            "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result"
            );
            setStateResult(data.data);
          };
          response();
},[])

console.log(stateResult, 'hjhsd767s')
  return (
    <div  style={{
        width: "90%",
        margin: "auto",
        height: "500px",
        borderRadius: "13px",
        border: "1px solid #393C4A",
        backgroundColor: "#1B1F30",
        marginTop: '25px'
      }}>
        <div style={{backgroundColor: '#111421', height: '62px', marginTop: '-22px', borderTopRightRadius: '13px',borderTopLeftRadius: '13px' }}>
            <h3 style={{fontFamily: 'Jost', fontSize: '24px', fontWeight: '500', color: '#FFFFFF', padding: '10px 25px'}}>State Results</h3>
        </div>
        <table>
        <tr>
          <th style={{paddingLeft: '30px', color: '#FFFFFF'}}>State</th>
          <th style={{paddingLeft: '30px', color: '#FFFFFF'}}>APC</th>
          <th style={{paddingLeft: '30px', color: '#FFFFFF'}}>LP</th>
          <th style={{paddingLeft: '30px', color: '#FFFFFF'}}>PDP</th>
        </tr>
        {/* {stateResult && stateResult.map((mapResult) => (
             <tr>
             <td>{stateResult[mapResult].political_party_name}</td>
             <td>{mapResult.candidate_votes}</td>
           </tr>
        ))} */}
        </table>
    </div>
  )
}

export default Index;