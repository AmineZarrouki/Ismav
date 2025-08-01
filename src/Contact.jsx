const Contact = () => {
  return (
    <section id="contact" className="section-area">
      <div className="container">
        <div className="row">
          <div className="col-12 xl:col-4">
            <div className="row">
              <div className="col-12 md:col-6 xl:col-12">
                <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
                  <div>
                    <i className="lni lni-phone w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
                  </div>
                  <div>
                    <h4 className="text-[1.25rem] text-primary mb-3">Contact</h4>
                    <p className="m-0">+212695110861</p>
                    <p className="m-0">ismav-institut@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 xl:col-12">
                <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
                  <div>
                    <i className="lni lni-map-marker w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
                  </div>
                  <div>
                    <h4 className="text-[1.25rem] text-primary mb-3">Adresse</h4>
                    <p className="m-0">PN°48 COMPLEXE TAMESNA TEMARA</p>
                    <p className="m-0">Maroc</p>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 xl:col-12">
                <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
                  <div>
                    <i className="lni lni-alarm-clock w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
                  </div>
                  <div>
                    <h4 className="text-[1.25rem] text-primary mb-3">Horaires</h4>
                    <p className="m-0">Ouvert 24h/24 et 7j/7</p>
                    <p className="m-0">Heures de bureau : 10h00 - 17h30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 xl:col-8">
            <div className="scroll-revealed bg-body-light-1 dark:bg-primary-dark-2 rounded-xl py-8 sm:py-12 px-6 sm:px-10 z-10 relative shadow-card-1 hover:shadow-lg">
              <div className="text-center max-w-[550px] mx-auto mb-12">
                <h6 className="mb-2 block text-lg font-semibold text-primary">Entrer en contact</h6>
                <h2 className="mb-3">Prêt à commencer</h2>
                <p>À vrai dire, nous accusons et détestons à juste titre les personnes dignes d’être blâmées.</p>
              </div>
              <form action="#" method="POST" className="flex flex-col gap-6">
                <div className="row">
                  <div className="col-12 md:col-6">
                    <input
                      type="text"
                      name="name"
                      className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
                      placeholder="Nom"
                      required
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <input
                      type="email"
                      name="email"
                      className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <input
                      type="text"
                      name="phone"
                      className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
                      placeholder="Téléphone"
                      required
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <input
                      type="text"
                      name="subject"
                      className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
                      placeholder="Sujet"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={5}
                      className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
                      placeholder="Tapez votre message"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <div className="w-full text-center">
                      <button
                        type="submit"
                        className="inline-block px-5 py-3 rounded-md text-base bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
                      >
                        Envoyer le message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


