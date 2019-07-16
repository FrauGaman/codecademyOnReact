import React from 'react';
import PropTypes from 'prop-types';
import SiteNav from './FooterLinks';
import FooterCatalog from './FooterCatalog';
import Resources from './Resources';
import './footer.sass';

function Footer({ footerNav, theme, language, resources }) {
  return (
    <div className="footer__container">
      <div className="site__navigation">
        <div className="footer__title">Codecademy</div>
        { footerNav.length ?
          <SiteNav footerNav={footerNav} />
          : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>
        }
      </div>
      <div className="courses__navigation">
        <div className="footer__title">Catalog</div>
        <FooterCatalog theme={theme} language={language} />
      </div>
      <div className="resources__navigation">
        <div className="footer__title">Resources</div>
        { resources.length ?
          <Resources res={resources} />
          : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>
        }
      </div>
    </div>
  );
}

Footer.propTypes = {
  footerNav: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  theme: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  language: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  resources: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Footer;
