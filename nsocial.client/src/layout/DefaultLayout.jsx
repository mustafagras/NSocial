import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import CookieBar from '../components/Default/CookieBar';
import Header from '../components/Default/Header';
import Footer from '../components/Default/Footer';
import 'react-toastify/dist/ReactToastify.css';
import '../app.css';

const DefaultLayout = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <CookieBar />
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        <ToastContainer />
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Footer Start ===== --> */}
          <Footer />
          {/* <!-- ===== Footer End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
