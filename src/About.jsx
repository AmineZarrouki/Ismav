import react from 'react'
import './assets/css/About.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const About = () => {
    return (
        <>
        <Navbar />

        <section id="about" className="section-area">
          <div className="container">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
              <div className="w-full">
                <figure className="scroll-revealed max-w-[480px] mx-auto">
                  <img
                    src="./assets/img/about-img.jpg"
                    alt="About"
                    className="rounded-xl"
                  />
                </figure>
              </div>
              <div className="w-full">
                <div className="scroll-revealed">
                  <h6 className="mb-2 block text-lg font-semibold text-primary">À propos de nous</h6>
                  <h2 className="mb-6">Institut ISMAV Le Choix de l'Avenir
                  </h2>
                </div>
                <div className="tabs scroll-revealed">
                  <nav className="tabs-nav flex flex-wrap gap-4 my-8" role="tablist" aria-label="About us tabs">
                  </nav>
                  <div className="tabs-content mt-4" id="tabs-panel-profile" tabIndex={-1} role="tabpanel" aria-labelledby="tabs-list-profile">
                    <p>
                    Vous êtes jeune, fille ou garçon, titulaire ou non de votre baccalauréat. Vous rêvez de faire carrière dans le domaine des médias, de l’Internet et de la Communication . Vous voulez mettre toutes les chances de votre côté pour construire un avenir prometteur dans l’un des secteurs de l’avenir, celui de l’Internet et des nouvelles technologies. L’ISM@V vous offre cette possibilité en mettant à votre disposition une équipe d’enseignants de haut niveau, praticiens, jeunes, dynamiques et créatifs. Celle qui va mettre à votre disposition l’ensemble des outils nécessaires pour accéder, sans difficulté, au marché du travail . Une formation innovante et polyvalente dans un environnement aujourd’hui en pleines mutations . Un enseignement de qualité qui prend réellement en compte les aspects théoriques et pratiques de la discipline dont vous voulez faire votre métier. Celui qui va vous hisser au sommet en vous permettant d’affiner chaque jour davantage vos connaissances et votre savoir-faire dans les secteurs les plus recherchés de nos jours sur le marché du travail. Au Maroc et partout ailleurs. Les filières que l’ISM@V vous propose sont à la fois complémentaire et véritablement à la pointe de la technologie ( l’Infographie, le développement multimédia, les métiers de l’Internet, du journalisme et de la communication, le son, le montage numérique, l’éclairage, la réalisation, la production….)
                    </p>
                    <p>
                    Faites maintenant de votre choix le tremplin vers l’Avenir….
                    </p>
                  </div>
                  <div className="tabs-content mt-4" id="tabs-panel-vision" tabIndex={-1} role="tabpanel" aria-labelledby="tabs-list-vision">
                    <p>
                    L’ISM@V s’adresse également aux salariés (eés) des entreprises publiques et privées qui souhaitent bénéficier de formations pointues et à durée déterminée dans pratiquement toutes les disciplines dispensées par l’Institut. Un programme de formation continue (spécifique) sanctionné par un certificat ad hoc qui attestent de la validité de la formation dont a bénéficié le candidat et ce dernier peut faire-valoir l’attestation en cas de besoin soit dans le cadre de ses activités professionnelles au sein de son entreprise ou pour tout autre usage en dehors de la société qui l’emploie                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        </>
    )
}
export default About
