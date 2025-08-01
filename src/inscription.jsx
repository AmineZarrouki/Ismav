import React from 'react';
import { useForm } from 'react-hook-form';
import './InscriptionForm.css';

const InscriptionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Inscription soumise avec succès !');
  };

  return (
    <div className="inscription-form-container">
      <div className="form-header">
        <h2>Formulaire d'Inscription - ISM@V</h2>
        <p>Rejoignez une formation d'avenir, que vous soyez bachelier ou non.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="inscription-form">
        <div className="form-section">
          <h3>Informations Personnelles</h3>
          <div className="form-group">
            <label htmlFor="nom">Nom Complet</label>
            <input
              id="nom"
              {...register('nom', { required: 'Ce champ est requis.' })}
            />
            {errors.nom && <p className="error-message">{errors.nom.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Ce champ est requis.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Adresse email invalide.',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input
              id="telephone"
              type="tel"
              {...register('telephone', { required: 'Ce champ est requis.' })}
            />
            {errors.telephone && <p className="error-message">{errors.telephone.message}</p>}
          </div>
        </div>

        <div className="form-section">
          <h3>Parcours et Formation</h3>
          <div className="form-group">
            <label htmlFor="niveauEtudes">Niveau d'études actuel</label>
            <select
              id="niveauEtudes"
              {...register('niveauEtudes', { required: 'Ce champ est requis.' })}
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="non-bachelier">Non Bachelier</option>
              <option value="bachelier">Bachelier</option>
              <option value="licence">Licence</option>
              <option value="master">Master</option>
              <option value="professionnel">En activité (Formation continue)</option>
            </select>
            {errors.niveauEtudes && <p className="error-message">{errors.niveauEtudes.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="formation">Formation souhaitée à l'ISM@V</label>
            <select
              id="formation"
              {...register('formation', { required: 'Ce champ est requis.' })}
            >
              <option value="">Choisissez une formation</option>
              <option value="infographie">Infographie</option>
              <option value="developpement-multimedia">Développement Multimédia</option>
              <option value="journalisme">Journalisme</option>
              <option value="realisation">Réalisation</option>
              <option value="production-audiovisuelle">Production Audiovisuelle</option>
              <option value="formation-continue">Formation Continue (Certificat)</option>
            </select>
            {errors.formation && <p className="error-message">{errors.formation.message}</p>}
          </div>
        </div>

        <div className="form-section">
          <h3>Motivation</h3>
          <div className="form-group">
            <label htmlFor="motivation">Pourquoi souhaitez-vous rejoindre l'ISM@V ?</label>
            <textarea
              id="motivation"
              rows="5"
              {...register('motivation')}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-button">Envoyer mon inscription</button>
      </form>
    </div>
  );
};

export default InscriptionForm;