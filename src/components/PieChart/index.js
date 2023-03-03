import React from "react";
import { pieChartData } from "../../mockData/pieChartData";
import Styles from "./index.module.css";

const Index = () => {
  return (
    <div className={Styles.mainDiv}>
      <div></div>
      {/* Second Div */}
      <div className={Styles.GeoZone}>
      <p className={Styles.GeoZoneP}>{pieChartData.GeoP}</p>
      <div>
        {/* <div>Div for Image MAP</div> */}
        <div>
          
        </div>
      </div>
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
