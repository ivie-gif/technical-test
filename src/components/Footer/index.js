import React from 'react';
import Styles from './index.module.css';
import {footerData} from '../../mockData/footerData'

const Index = () => {
  return (
    <div className={Styles.body}>
    <div className={Styles.mainFlex}>
        <div className={Styles.textColor}>
        <img src={footerData.Logo} alt='Logo Icon' className={Styles.ImageStyle} />
        <h3
        dangerouslySetInnerHTML={{
            __html: footerData.Address,
          }}></h3>
        <h3>{footerData.Address1}</h3>
        </div>
        <div className={Styles.textColor}>
        <h3>{footerData.Heading2}</h3>
        <h3>{footerData.Story}</h3> 
        <h3>{footerData.Blog}</h3>
        <h3>{footerData.About}</h3>
        <h3>{footerData.Video}</h3>
        </div>
        <div className={Styles.textColor}>
        <h3>{footerData.Heading3}</h3>
        <h3>{footerData.Faq}</h3> 
        <h3>{footerData.Priv}</h3>
        <h3>{footerData.Term}</h3>
        </div>
        <div className={Styles.textColor}>
        <h3>{footerData.Heading4}</h3>
        <h3>{footerData.Mail}</h3> 
        <h3>{footerData.Phone}</h3>
        <div className={Styles.socialIcons}>
            <div><img src={footerData.Image1} alt='Instagram Icon' /></div>
            <div><img src={footerData.Image2} alt='Twitter Icon' className={Styles.ImageTwo} /></div>
            <div><img src={footerData.Image3} alt='whatsapp Icon' className={Styles.ImageTwo}/></div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Index