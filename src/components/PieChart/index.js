import React from "react";
import { pieChartData } from "../../mockData/pieChartData";
import Styles from "./index.module.css";
import MapContent from "./mapContent";
import PieChartComp from "./pieChartComp";

const Index = () => {
  return (
    <div className={Styles.mainDiv} style={{
      width: "90%",
      margin: "auto",
      height: "428px",
      borderRadius: "13px",
      border: "1px solid #393C4A",
      backgroundColor: "#1B1F30",
      marginTop: '25px',
      marginBottom: '55px'
    }}>
      
      {/* 1st Div */}
      <div className={Styles.GeoZone}>
        <PieChartComp />
      </div>
      {/* second div */}
      <div className={Styles.GeoZoneMap}>
        <MapContent />
      </div>
      {/* Third Div */}
      <div className={Styles.anchorBg}>
        <p className={Styles.Elected}>{pieChartData.Elected}</p>
        <p className={Styles.Nums}>{pieChartData.Num1}</p>
        <div className={Styles.genderDiv}>
          <div>
            <p className={Styles.genders}>{pieChartData.Sex1}</p>
          </div>
          <div>
            <img src={pieChartData.Image} alt="anchor icon" className={Styles.images} />
          </div>
        </div>
        <p className={Styles.Nums}>{pieChartData.SexNum}</p>

        <div className={Styles.genderDiv}>
          <div>
            <p className={Styles.genders}>{pieChartData.Sex2}</p>
          </div>
          <div>
            <img src={pieChartData.Image2} alt="anchor icon" className={Styles.images} />
          </div>
        </div>
        <p className={Styles.Nums}>{pieChartData.Sex2Num}</p>
      </div>
    </div>
  );
};

export default Index;
