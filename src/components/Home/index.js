import React from "react";
import Navbar from '../Navbar/index';
import Dropdowns from '../Dropdowns/index'
import Footer from '../Footer/index'
import Styles from './index.module.css'

const Index = () => {
  return (
    <div>
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
    <Footer />
    </div>
  );
};

export default Index;
