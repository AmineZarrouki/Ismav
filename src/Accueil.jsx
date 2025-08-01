import React from 'react';
import Navbar from './Navbar.jsx';
import { useEffect } from 'react';
// Import ScrollReveal
import ScrollReveal from 'scrollreveal';
// Import Swiper
import Swiper from 'swiper';
// Import GLightbox
import GLightbox from 'glightbox';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';



const Accueil = () => {
    useEffect(() => {
        // Page loading
        const initializePageLoading = () => {
          const pageLoading = document.querySelector(".page-loading");
          if (pageLoading) {
            const handleLoad = () => {
              pageLoading.classList.add("hide");
              setTimeout(() => {
                pageLoading.style.display = "none";
              }, 1000);
            };
            
            if (document.readyState === 'complete') {
              handleLoad();
            } else {
              window.addEventListener("load", handleLoad);
            }
          }
        };
    
        // Navbar functionality
        const initializeNavbar = () => {
          const navbar = document.querySelector(".ic-navbar");
          const navbarToggler = navbar?.querySelector("[data-web-toggle=navbar-collapse]");
    
          if (navbar && navbarToggler) {
            const handleNavbarToggle = function () {
              const dataTarget = this.dataset.webTarget;
              const targetElement = document.getElementById(dataTarget);
              const isExpanded = this.ariaExpanded === "true";
    
              if (!targetElement) return;
    
              navbar.classList.toggle("menu-show");
              this.ariaExpanded = !isExpanded;
              navbarToggler.innerHTML = navbar.classList.contains("menu-show")
                ? '<i class="lni lni-close"></i>'
                : '<i class="lni lni-menu"></i>';
            };
    
            navbarToggler.addEventListener("click", handleNavbarToggle);
    
            // Sticky navbar
            const handleScroll = function () {
              if (window.scrollY >= 72) {
                navbar.classList.add("sticky");
              } else {
                navbar.classList.remove("sticky");
              }
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
              navbarToggler.removeEventListener("click", handleNavbarToggle);
              window.removeEventListener("scroll", handleScroll);
            };
          }
        };
    
        // Initialize with delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
          initializePageLoading();
          initializeNavbar();
        }, 100);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    
      useEffect(() => {
        // Web theme toggle - with delay to ensure DOM is ready
        const initializeTheme = () => {
          const webTheme = document.querySelector("[data-web-trigger=web-theme]");
          const html = document.querySelector("html");
    
          if (webTheme && html) {
            let theme = localStorage.getItem("Inazuma_WebTheme");
    
            if (theme === "light") {
              webTheme.innerHTML = '<i class="lni lni-sun"></i>';
            } else if (theme === "dark") {
              webTheme.innerHTML = '<i class="lni lni-night"></i>';
            } else {
              theme = "light";
              localStorage.setItem("Inazuma_WebTheme", theme);
              webTheme.innerHTML = '<i class="lni lni-night"></i>';
            }
    
            html.dataset.webTheme = theme;
    
            const handleThemeClick = function () {
              let currentTheme = localStorage.getItem("Inazuma_WebTheme");
              webTheme.innerHTML = currentTheme === "dark"
                ? '<i class="lni lni-sun"></i>'
                : '<i class="lni lni-night"></i>';
    
              currentTheme = currentTheme === "dark" ? "light" : "dark";
              localStorage.setItem("Inazuma_WebTheme", currentTheme);
              html.dataset.webTheme = currentTheme;
            };
    
            webTheme.addEventListener("click", handleThemeClick);
    
            return () => {
              webTheme.removeEventListener("click", handleThemeClick);
            };
          }
        };
    
        // Try immediately, then with a delay
        initializeTheme();
        const timeoutId = setTimeout(initializeTheme, 100);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    
      useEffect(() => {
        // Initialize libraries with delay to ensure DOM is ready
        const initializeLibraries = () => {
          try {
            // Scroll Reveal
            const sr = ScrollReveal({
              origin: 'bottom',
              distance: '16px',
              duration: 1000,
              reset: false,
            });
    
            sr.reveal(`.scroll-revealed`, {
              cleanup: true,
            });
    
            // GLightBox
            GLightbox({
              selector: '.video-popup',
              href: 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
              type: 'video',
              source: 'youtube',
              width: 900,
              autoplayVideos: true,
            });
    
            const myGallery3 = GLightbox({
              selector: '.portfolio-box',
              type: 'image',
              width: 900,
            });

            // Formation images lightbox
            const formationGallery = GLightbox({
              selector: '.formation-box',
              type: 'image',
              width: 900,
            });

            // Formation filtering functionality
            const initializeFormationFilter = () => {
              const filterButtons = document.querySelectorAll('.formations-menu button[data-filter]');
              const formationItems = document.querySelectorAll('.formation');
    
              filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                  const filterValue = this.getAttribute('data-filter');
                  
                  // Remove active class from all buttons
                  filterButtons.forEach(btn => btn.classList.remove('active'));
                  // Add active class to clicked button
                  this.classList.add('active');
                  
                  // Filter formations
                  formationItems.forEach(item => {
                    const itemFilter = item.querySelector('article').getAttribute('data-filter');
                    
                    if (filterValue === 'all' || itemFilter === filterValue) {
                      item.style.display = 'block';
                      item.style.opacity = '0';
                      setTimeout(() => {
                        item.style.opacity = '1';
                      }, 50);
                    } else {
                      item.style.display = 'none';
                    }
                  });
                });
              });
            };
    
            // Swiper Testimonial Carousel
            const testimonialSwiper = new Swiper('.testimonial-carousel', {
              slidesPerView: 1,
              spaceBetween: 30,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              },
            });

            // Initialize formation filter
            initializeFormationFilter();
    
            return () => {
              if (myGallery3) {
                myGallery3.destroy();
              }
              if (testimonialSwiper) {
                testimonialSwiper.destroy();
              }
            };
          } catch (error) {
            console.log('Libraries initialization error:', error);
          }
        };
    
        // Initialize with delay
        const timeoutId = setTimeout(initializeLibraries, 200);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);


    return (
        <>  
        {/* Page loading */}
        <div
        className="page-loading fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-label="Loading..."
        >
        <div className="grid-loader">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
        </div>


      <Navbar />


      <main className="main relative">
      {/* Hero section */}
      <section
        id="home"
        className="relative overflow-hidden text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]"
        style={{
          backgroundImage: 'url(https://i.ibb.co/1GHZ74NZ/Whats-App-Image-2025-07-23-at-22-48-55-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="-mx-5 flex flex-wrap items-center">
            <div className="w-full px-5">
              <div className="scroll-revealed mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">

                Institut ISMAV Le Choix de l'Avenir
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
                Vous voulez mettre toutes les chances de votre côté pour construire un avenir prometteur dans l’un des secteurs de l’avenir
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                  <li>
                    <a
                      href="/inscription"
                      className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 text-center text-base font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
                      role="button"
                    >
                      Inscription
                    </a>
                  </li>
                </ul>
               
              </div>
            </div>
            <div className="w-full px-5">
              <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <img src="./assets/img/dots.svg" alt="" className="w-[120px] opacity-75" />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <img src="./assets/img/dots.svg" alt="" className="w-[120px] opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* About section */}  
      <section id="about" class="section-area">
        <div class="container">
          <div class="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div class="w-full">
              <figure class="scroll-revealed max-w-[480px] mx-auto">
                <img
                  src="https://i.ibb.co/MrtCtzx/506831653-565381949978216-8292596826355229289-n.jpg"
                  alt="About image"
                  class="rounded-xl"
                />
              </figure>
            </div>

            <div class="w-full">
              <div class="scroll-revealed">
                <h6 class="mb-2 block text-lg font-semibold text-primary">
               À propos de nous
                </h6>
                <h2 class="mb-6">
                  Vous rêvez d’un avenir dans les médias, l’Internet ou la communication ?
                </h2>
              </div>

              <div class="tabs scroll-revealed">
                <nav
                  class="tabs-nav flex flex-wrap gap-4 my-8"
                  role="tablist"
                  aria-label="About us tabs"
                >
                  <button
                    type="button"
                    class="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
                    data-web-toggle="tabs"
                    data-web-target="tabs-panel-profile"
                    id="tabs-list-profile"
                    role="tab"
                    aria-controls="tabs-panel-profile"
                  >
                    Notre Profil
                  </button>

                  <button
                    type="button"
                    class="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
                    data-web-toggle="tabs"
                    data-web-target="tabs-panel-vision"
                    id="tabs-list-vision"
                    role="tab"
                    aria-controls="tabs-panel-vision"
                  >
                    Notre Vision
                  </button>

                </nav>

                <div
                  class="tabs-content mt-4"
                  id="tabs-panel-profile"
                  tabindex="-1"
                  role="tabpanel"
                  aria-labelledby="tabs-list-profile"
                >
                  <p>
                   Que vous soyez bachelier ou non, <b>l’ISM@V</b> vous offre une formation innovante et polyvalente, assurée par des enseignants expérimentés et passionnés. Vous y apprendrez les compétences les plus recherchées dans des domaines tels que 
                   <b> l’infographie</b>, <b>le développement multimédia</b>, <b>le journalisme</b>, <b>la réalisation</b>, <b>la production audiovisuelle</b>, et bien plus encore.

Grâce à une approche à la fois théorique et pratique, vous serez parfaitement préparé à intégrer le marché du travail, au Maroc comme à l’international.

<b>l’ISM@V</b>, c’est aussi des formations continues destinées aux salariés du secteur public et privé, avec des certificats reconnus pour valoriser votre parcours professionnel.

Faites de votre passion un métier, et de l’ISM@V votre tremplin vers l’avenir.
                  </p>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>
     

      <section id="intro" className="section-area">
      <div className="container">
        <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
          <h6 className="mb-2 block text-lg font-semibold text-primary">Vidéo d’introduction</h6>
          <h2 className="mb-6">Regardez notre vidéo d’introduction</h2>
        </div>
        <div className="scroll-revealed relative max-w-[900px] mx-auto">
          <div className="aspect-video">
            <video
              src={require("./vid.mp4")}
              alt="Vidéo d'introduction"
              className="w-full h-full rounded-xl"
              controls={true}
            />
          </div>
        </div>
      </div>
    </section>

      {/* Formations section */}
      <section id="formations" className="section-area">
        <div className="container">
          <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
            <h6 className="mb-2 block text-lg font-semibold text-primary">
              Nos Formations
            </h6>
            <h2 className="mb-6">Les formations diplômantes</h2>
            <p>
              ISMAV propose des formations professionnelles diplômantes et certifiantes 
              pour vous préparer aux métiers du numérique et de la communication.
            </p>
          </div>

          <nav
            className="scroll-revealed formations-menu mb-[3.750rem] text-center"
            aria-label="Formations filter"
          >
            <button
              type="button"
              className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color active"
              data-filter="all"
            >
              Toutes les formations
            </button>
            <button
              type="button"
              className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
              data-filter="diplomantes"
            >
              Formations Diplômantes
            </button>
            <button
              type="button"
              className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
              data-filter="certifiantes"
            >
              Formations Certifiantes
            </button>
          </nav>

          <div className="scroll-revealed formations-grid row">
            {/* INFOGRAPHIE - Formation Diplômante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="diplomantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/zH7X5WpG/Whats-App-Image-2025-07-23-at-22-49-05.jpg"
                    alt="Formation Infographie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      INFOGRAPHIE
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Diplômante</p>
                  <p className="mt-2">
                    Formation complète en infographie permettant aux étudiants de maîtriser 
                    les bases du design graphique, de la retouche d'image et de la création visuelle.
                  </p>
                </div>
              </article>
            </div>

            {/* DÉVELOPPEUR MULTIMÉDIA - Formation Diplômante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="diplomantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/qMmVSkrd/depositphotos-105664610-stock-photo-man-working-on-computer.webp"
                    alt="Formation Développeur Multimédia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      DÉVELOPPEUR MULTIMÉDIA
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Diplômante</p>
                  <p className="mt-2">
                    Formation en développement multimédia pour créer des applications web, 
                    des interfaces interactives et des contenus numériques innovants.
                  </p>
                </div>
              </article>
            </div>

            {/* Concepteur de vidéos numérique - Formation Certifiante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="certifiantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/PGy4y4FX/Premiere-Pro-VS-DAvinciresolve-quel-logiciel-choisir.jpg"
                    alt="Concepteur de vidéos numérique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      Concepteur de vidéos numérique
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Certifiante</p>
                  <p className="mt-2">
                    Formation complète en montage vidéo et technologies numériques 
                    pour créer des contenus vidéo professionnels.
                  </p>
                </div>
              </article>
            </div>

            {/* Techniques de prises de vues - Formation Certifiante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="certifiantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/G4Qq9Ybk/homme-camera-filme-mec-avec-haut-parleur-a-la-camera.jpg"
                    alt="Techniques de prises de vues"
                    className="w-full h-full object-cover"
                  />
                 
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      Techniques de prises de vues
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Certifiante</p>
                  <p className="mt-2">
                    Montage vidéo professionnel et nouveaux médias. 
                    Maîtrise des techniques de prise de vue et de montage avancé.
                  </p>
                </div>
              </article>
            </div>

            {/* JRI-M - Formation Certifiante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="certifiantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/ZRfkFpx5/MK41-1-JRI.jpg"
                    alt="JRI-M Journaliste reporter d'images Monteur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      JRI-M | Journaliste reporter d'images Monteur
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Certifiante</p>
                  <p className="mt-2">
                    Formation spécialisée en journalisme audiovisuel, 
                    reportage et montage pour les médias.
                  </p>
                </div>
              </article>
            </div>

            {/* Anglais pour les professionnels - Formation Certifiante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="certifiantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/35z0C0cx/LANGUES-1.png"
                    alt="Anglais pour les professionnels"
                    className="w-full h-full object-cover"
                  />
                 
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      Anglais pour les professionnels
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Certifiante</p>
                  <p className="mt-2">
                    Formation en anglais spécialisé pour les métiers du numérique 
                    et de la communication.
                  </p>
                </div>
              </article>
            </div>

            {/* Formation Podcast - Formation Certifiante */}
            <div className="formation col-12 sm:col-6 lg:col-4">
              <article className="group" data-filter="certifiantes">
                <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                  <img
                    src="https://i.ibb.co/LhSpR44X/podcast-setup.jpg"
                    alt="Formation Podcast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h4 className="mb-2">
                    <a href="javascript:void(0)" className="text-[1.5rem] leading-tight text-inherit">
                      Formation Podcast
                    </a>
                  </h4>
                  <p className="text-sm text-primary">Formation Certifiante</p>
                  <p className="mt-2">
                    Conception, enregistrement et production de podcasts. 
                    Maîtrise complète de la création audio numérique.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>


      {/* Call action section */}
      <section id="call-action" className="section-area !bg-primary !text-primary-color">
        <div className="container">
          <div className="scroll-revealed text-center max-w-[550px] mx-auto">
            <h2 className="mb-8 text-inherit">Nous aimons créer des solutions parfaites pour votre réussite</h2>
            <p>
              Pourquoi ne pas faire confiance à ISMAV pour donner vie à vos projets ? Notre équipe vous accompagne, de l’idée à la réalisation, avec expertise et passion.
            </p>
            <a
              href="javascript:void(0)"
              className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
              role="button"
            >
              Inscrivez-vous
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
     <Contact />

      {/* Map section */}
      <section id="map" className="w-full h-[500px] overflow-hidden -mt-[12rem]">
        <object
          data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.364770318983!2d-6.914783224736452!3d33.82903652948413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda711c8c20aa921%3A0xf4847360acf960bd!2sISMAV%3AINSTITUT%20SPECIALISE%20DANS%20LES%20METIERS%20DE%20L%E2%80%99AUDIOVISUEL%2C%20DU%20CINEMA%2C%20DE%20L%E2%80%99INTERNET%2C%20DU%20MULTIMEDIA%20ET%20DE%20LA%20COMMUNICATION!5e1!3m2!1sen!2sma!4v1754059443764!5m2!1sen!2sma
"
          className="border-0 w-full h-full"
        />
      </section>
    </main>

    <Footer />
    
    <button
        type="button"
        className="inline-flex w-12 h-12 rounded-md items-center justify-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 fixed bottom-[117px] right-[20px] hover:-translate-y-1 opacity-100 visible z-50 is-hided"
        data-web-trigger="scroll-top"
        aria-label="Scroll to top"
      >
        <i className="lni lni-chevron-up" />
      </button>
    </>
    );
};
export default Accueil;