import React from "react";
import Navbar from '../Navbar/index';
import Dropdowns from '../Dropdowns/index'
import './index.css'

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="div-pres">
        <div>
          <p className="pres-div1">Post Election Data</p>
        </div>
        <div className="pres-div2">
          <h3 className="pres-div2-text">PRESIDENTIAL / 2023</h3>
        </div>
      </div>
    <Dropdowns />
    </div>
  );
};

export default Index;
