import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="text-black dark:text-white">
          <p>© 2023 Company, Inc</p>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li className="text-black dark:text-white">
              <NavLink className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')} to="/">
                Home
              </NavLink>
            </li>
            <li className="text-black dark:text-white">
              <NavLink
                className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')}
                to="/features"
              >
                Features
              </NavLink>
            </li>
            <li className="text-black dark:text-white">
              <NavLink
                className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')}
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li className="text-black dark:text-white">
              <NavLink className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')} to="/faqs">
                FAQs
              </NavLink>
            </li>
            <li className="text-black dark:text-white">
              <NavLink className={({ isActive }) => 'hover:text-primary ' + (isActive && '!text-primary')} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
