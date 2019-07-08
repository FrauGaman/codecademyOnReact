import React from 'react';
import SiteNav from "./FooterLinks";
import FooterCatalog from "./FooterCatalog";
import Resources from "./Resources";

import './footer.sass'

function Footer(props) {
  return(
    <div className="footer__container">

      <div className="site__navigation">
        <div className="footer__title">Codecademy</div>
        <SiteNav footerNav={props.footerNav}/>
      </div>

      <div className="courses__navigation">
        <div className="footer__title">Catalog</div>
        <FooterCatalog theme={props.theme} language={props.language} />
      </div>

      <div className="resources__navigation">
        <div className="footer__title">Resources</div>
        <Resources res={props.resources}/>
      </div>

    </div>
  )
}

export default Footer