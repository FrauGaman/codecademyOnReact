import React from 'react';

function FooterCatalog(props) {
  const {theme, language} = props;
  return (
    <div className="footer__courses__links">
      <div className="theme_col">
        <div className="filter__title">by subject</div>
        <ul className="footer__list">
          {theme.map(item =>
            <li key={item.id}><a href="null" className="footer__li">{item.name}</a></li>
          )}
        </ul>
      </div>
      <div className="language__col">
        <div className="filter__title">by language</div>
        <ul className="footer__list">
          {language.map(item =>
            <li key={item.id}><a href="null" className="footer__li">{item.name}</a></li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FooterCatalog;
