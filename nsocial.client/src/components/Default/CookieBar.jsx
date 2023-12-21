import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CookieBar = () => {
  const [cookieBarVisibilty, setCookieBarVisibilty] = useState(true);

  const handleCookieBar = () => {
    localStorage.setItem('cookie-panel', true);
    setCookieBarVisibilty(false);
  };

  useEffect(() => {
    const shouldDisplayCookieBar = localStorage.getItem('cookie-panel');

    if (!shouldDisplayCookieBar) {
      setCookieBarVisibilty(true);
    }
  }, []);

  return (
    <Fragment>
      {cookieBarVisibilty && (
        <div className="cookieBar">
          <div className="cookieBar__item p-3 p-sm-2">
            <div className="p-1">
              <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                <div className="flex-grow-1 me-0 me-sm-2">
                  <p className="ps-0 ps-sm-3 dark:text-white">
                    Size en uygun deneyimi sunmak için çerezleri kullanıyoruz.
                    <Link to="/cookie-policy" target="_blank">
                      &nbsp;Detaylı bilgi
                    </Link>
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="closeBar mx-auto mt-3 mt-sm-0 dark:hover:text-white" onClick={handleCookieBar}>
                    devam et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CookieBar;
