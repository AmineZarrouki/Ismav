import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
      <footer className="bg-primary-dark-2 text-white">
      <div className="container py-20 lg:py-[100px]">
        <div className="row">
          <div className="col-12 order-first lg:col-4">
            <div className="w-full">
            <div className="flex-shrink-0">
              <a href="." className="ic-navbar-logo block py-2 text-primary-color">
                <img src="http://ismav.abhdev.net/wp-content/uploads/2024/05/logo-ISMAV.png" alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
              <p className="mb-8 text-body-dark-11">
              Institut ISMAV Le Choix de l'Avenir
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  href="https://web.facebook.com/ismavcontact"
                  className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/ismavinstitut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 lg:col-2">
            <div className="w-full">
              <h4 className="mb-9 text-lg font-semibold text-inherit">Formations</h4>
              <ul>
                <li><a href="javascript:void(0)" className="mb-3 inline-block text-body-dark-11 hover:text-primary">Infographie</a></li>
                <li><a href="javascript:void(0)" className="mb-3 inline-block text-body-dark-11 hover:text-primary">Développement multimédia</a></li>
              </ul>
            </div>
          </div>
          <div className="col-6 lg:col-2">
            <div className="w-full">
              <h4 className="mb-9 text-lg font-semibold text-inherit">Contact</h4>
              <ul>
                <li><a href="javascript:void(0)" className="mb-3 inline-block text-body-dark-11 hover:text-primary">PN°48 COMPLEXE TAMESNA TEMARA </a></li>
                <li><a href="javascript:void(0)" className="mb-3 inline-block text-body-dark-11 hover:text-primary">+212695110861</a></li>
                <li><a href="javascript:void(0)" className="mb-3 inline-block text-body-dark-11 hover:text-primary">ismav-institut@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-solid border-alpha-dark" />
      <div className="container py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="my-1 flex justify-center md:justify-end">
              <p className="text-body-dark-11">
                © 2025 ISMAV. Tous droits reservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer