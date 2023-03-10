import React from "react";
import Navbar from '../Navbar/index';
import Dropdowns from '../Dropdowns'
import Footer from '../Footer'
import MapSection from '../MapSection'
import PieChart from '../PieChart'
import Presidential from '../Presidential'
import Result from '../Result'
import Styles from './index.module.css'

const Index = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <div className={Styles.divPres}>
        <div>
          <p className={Styles.presDiv1}>Post Election Data</p>
        </div>
        <div className={Styles.presDiv2}>
          <h3 className={Styles.presDiv2Text}>PRESIDENTIAL / 2023</h3>
        </div>
      </div>
    <Dropdowns />
    <div style={{marginBottom: '200px'}}>
    <Presidential/>
    </div>
    <MapSection />
    <Result />
    <PieChart />
    <Footer />
    </div>
  );
};

export default Index;
