import { useState } from 'react';
import styles from './Fieldset_Professionel.module.scss';

export function renderInputsProInfos(
  professionalConsulted,
  setProfessionalConsulted,
  inputError
) {
  const dataAbr = ['Dr.', 'Pr.', 'Me.', 'Aud.', 'Coach', ''];
  const titreForInputId = [
    'docteur',
    'professeur',
    'maitre',
    'auditeur',
    'coach',
    'autre',
  ];
  const dataApp = [
    'Docteur',
    'Professeur',
    'Maître',
    'Auditeur de justice',
    'Coach',
    'autre...',
  ];
  const proFields = [
    'name',
    'firstname',
    'address',
    'zipcode',
    'city',
    'country',
    'domain',
  ];
  const labels = [
    'Nom',
    'Prénom',
    'Adresse',
    'Code postale',
    'Ville',
    'Pays',
    'Domaine',
  ];

  const handleProInfos = (e) => {
    // console.log('e.target : ', e.target);
    setProfessionalConsulted({
      ...professionalConsulted,
      [e.target.name]: e.target.value,
    });
  };
  //
  const getPlaceholder = (field, label) => {
    switch (field) {
      case 'name':
        return professionalConsulted.value;
      // break;
      case 'domain':
        return 'Cardiologue...';
      // break;
      case 'address':
        return '8, rue de...';
      case 'zipcode':
        return '01000';
      default:
        return label + '...';
      // break;
    }
  };
  //

  if (professionalConsulted.__isNew__) {
    return (
      <>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='titre'>
            Titre
          </label>
          <div className={styles.proTitleBox}>
            {dataAbr.map((elem, i) => {
              return (
                <div key={elem} className={styles.selectPro}>
                  <input
                    type='radio'
                    id={titreForInputId[i]}
                    name='titre'
                    value={elem}
                    onClick={(e) => handleProInfos(e)}
                  />
                  <label htmlFor={titreForInputId[i]}>
                    &nbsp;
                    {`${dataApp[i]} ${
                      i >= dataApp.length - 2 ? '' : `(${dataAbr[i]})`
                    }`}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* Pro Fields */}
        {proFields.map((field, i) => {
          return (
            <div key={field} className={styles.inputBox}>
              <label className={styles.label} htmlFor={`pro-${field}`}>
                {labels[i]}{' '}
                <span className={styles.petit}>du professionnel </span>{' '}
                {(field === 'name' || field === 'domain') && (
                  <span className={styles.asterisque}>*</span>
                )}
              </label>
              <input
                className={`${styles.input} ${
                  inputError === field ? styles.invalid : null
                }`}
                autoFocus={inputError === field ? true : false}
                form='createStoryForm'
                id={`pro-${field}`}
                placeholder={getPlaceholder(field, labels[i])}
                type='text'
                name={field}
                value={professionalConsulted?.[field]}
                onChange={(e) => handleProInfos(e)}
                required={field === 'name' || field === 'domain' ? true : false}
              />
              {inputError === field && (
                <span className={styles.inputError}>
                  Merci de renseigner {labels[i]} du professionnel.
                </span>
              )}
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-city-select'>
            Ville
          </label>

          <div className={styles.searchPro}>
            <input
              className={styles.input}
              value={`${professionalConsulted.city}, ${
                professionalConsulted.zipcode
              } - ${professionalConsulted.country?.toUpperCase()}`}
              readOnly
            />
          </div>
        </div>{' '}
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-domain-select'>
            Domaine
          </label>

          <div className={styles.searchPro}>
            <input
              className={styles.input}
              value={`${professionalConsulted.domain}`}
              readOnly
            />
          </div>
        </div>
      </>
    );
  }
}
