import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../images/logo/logo.png';
import DarkModeSwitcher from '../DarkModeSwitcher';

const Header = () => {
  return (
    <Fragment>
      <header
        id="home"
        className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
      >
        <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 lg">
            <ScrollLink className="block flex-shrink-0 lg" to="home">
              <img src={Logo} alt="Logo" />
            </ScrollLink>
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2.5 ">
              <li className="rounded-md px-4 font-medium text-xl text-black dark:text-white duration-300 ease-in-out">
                <NavLink className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')} to="/">
                  Home
                </NavLink>
              </li>
              <li className="rounded-md px-4 font-medium text-xl text-black dark:text-white duration-300 ease-in-out">
                <a className="hover:text-primary" href="/admin">
                  Admin
                </a>
              </li>
              <li className="rounded-md px-4 font-medium text-xl text-black dark:text-white duration-300 ease-in-out">
                <NavLink
                  className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')}
                  to="/auth/signin"
                >
                  SignIn
                </NavLink>
              </li>
              <li className="rounded-md px-4 font-medium text-xl text-black dark:text-white duration-300 ease-in-out">
                <NavLink
                  className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')}
                  to="/auth/signup"
                >
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              {/* <!-- Dark Mode Toggler --> */}
              <DarkModeSwitcher />
              {/* <!-- Dark Mode Toggler --> */}
            </ul>
          </div>
        </div>
      </header>
      <br />
      <ScrollLink className="scroll scroll_row" to="home" smooth={true} duration={500}>
        <span className="scroll__mouse"></span>SCROLL
      </ScrollLink>
    </Fragment>
  );
};

export default Header;
