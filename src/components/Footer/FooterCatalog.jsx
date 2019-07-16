import React from 'react';
import PropTypes from 'prop-types';

function FooterCatalog({ theme, language }) {
  return (
    <div className="footer__courses__links">
      <div className="theme_col">
        <div className="filter__title">by subject</div>
        <ul className="footer__list">
          { theme.length ?
            theme.map(({ id, name = 'LinkPlug' }) =>
                <li key={id}><a href="{null}" className="footer__li">{name}</a></li>
              )
            : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>
          }
        </ul>
      </div>
      <div className="language__col">
        <div className="filter__title">by language</div>
        <ul className="footer__list">
          {language.length ?
            language.map(({ id, name = 'LinkPlug' }) =>
              <li key={id}><a href="{null}" className="footer__li">{name}</a></li>
            )
            : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>
          }
        </ul>
      </div>
    </div>
  );
}

FooterCatalog.propTypes = {
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
};

export default FooterCatalog;
