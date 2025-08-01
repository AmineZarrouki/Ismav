import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="ic-navbar fixed left-0 top-0 z-50 flex w-full items-center bg-white shadow-md"
      role="banner"
      aria-label="Navigation bar"
    >
      <div className="container">
        <div className="ic-navbar-container relative flex items-center justify-between px-5">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="." className="ic-navbar-logo block py-2 text-primary-color">
              <img src="http://ismav.abhdev.net/wp-content/uploads/2024/05/logo-ISMAV.png" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navbar Links and Buttons */}
          <div className="flex flex-grow items-center justify-between">
            <div>
              <button
                type="button"
                className="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-primary-color ring-primary focus:ring-2 lg:hidden"
                data-web-toggle="navbar-collapse"
                data-web-target="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                <i className="lni lni-menu" />
              </button>

              <nav
                id="navbarMenu"
                className="ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg hidden bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul
                  className="block lg:flex"
                  role="menu"
                  aria-label="Navigation menu"
                >
                  <li className="group relative">
                    <a
                      href="#home"
                      className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70 active"
                      role="menuitem"
                    >
                      Accueil
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#formations"
                      className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
                      role="menuitem"
                    >
                      Formations
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#about"
                      className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
                      role="menuitem"
                    >
                      À propos de nous
                    </a>
                  </li>
                  
                  <li className="group relative">
                    <a
                      href="#contact"
                      className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
                      role="menuitem"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end pr-[52px] lg:pr-0">
              <button
                type="button"
                className="inline-flex items-center text-primary-color text-[24px]/none"
                aria-label="Switch theme"
                data-web-trigger="web-theme"
              />
              <div className="hidden sm:flex">
                <a
                  href="#"
                  className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 text-base font-medium text-primary-color hover:bg-opacity-100 hover:text-primary"
                  role="button"
                >
                  Inscription
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
