import React, { useId } from 'react';
import styles from './Fieldset_Ressource.module.scss';

function renderInputsRessource(
  selected,
  ressource,
  setRessource,
  // inputError,
  story,
  setStory
) {
  const data = {
    citation: {
      ['-required- Citation']:
        'Quand la vie te donne un citron, fais-en une limonade',
      ['Auteur de la citation']: 'Inconnu',
    },
    film: {
      ['-required- Titre du film']: 'titre du film',
      ['Réalisateur']: 'Coogler',
      ['Acteur principal']: 'Acteur 1',
      ['Acteur 2']: 'Acteur 2',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    influenceur: {
      ['-required- Nom du compte Youtube / Instagram / TikTok']:
        '@citronenlimonade',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    livre: {
      ['-required- Titre du livre']: 'titre du livre',
      ['-required- Auteur du livre']: 'auteur du livre',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    musique: {
      ['-required- Titre de la chanson']: 'titre de la chanson',
      ["-required- Nom de l'artiste"]: "nom de l'artiste",
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    podcast: {
      ['-required- Titre du podcast']: 'titre du podcast',
      ['-required- Auteur du podcast']: 'auteur du podcast',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    série: {
      ['-required- Titre de la série']: 'titre de la série',
      ['Acteur principal']: 'Acteur 1',
      ['Acteur 2']: 'Acteur 2',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    vidéo: {
      ['-required- Titre de la vidéo']: 'titre de la vidéo',
      ['Auteur de la vidéo']: 'auteur de la vidéo',
      ['Site de la vidéo']: 'url de la vidéo',
    },
  };
  // console.log('data[2] : ', Object.keys(data)[2]);
  console.log('Ressource... : ', ressource);

  //
  const handleRessourceInfos = (e) => {
    console.log('e.target : ', e.target);
    setRessource({ ...ressource, [e.target.name]: e.target.value });
    setStory({
      ...story,
      ressourceToCreate: {
        ...story.ressourceToCreate,
        complete: {
          ...story.ressourceToCreate.complete,
          [selected]: {
            ...story.ressourceToCreate.complete[selected],
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  };
  //
  function renderInputs(selected) {
    let labelsAndInputs = Object.entries(data[selected]);
    return (
      <>
        <div key={selected}>
          {labelsAndInputs.map((item, i) => {
            let label;
            let labelSlug;
            if (
              item[0].startsWith('-required-') ||
              item[0].startsWith('-textarea-')
            ) {
              label = item[0].slice(11);
              label.includes('série') ? (label = 'Titre de la serie') : null;
              label.includes('vidéo') ? (label = 'Titre de la video') : null;
              label.includes('Pourquoi cette ressource ?')
                ? (label = 'Pourquoi cette ressource')
                : null;
              label.includes('Réalisateur') ? (label = 'realisateur') : null;
              labelSlug = label.replace(/\W+/g, '-').toLowerCase();
              // remplace tout ce qui n'est pas alphanumérique par '-'
            } else {
              label = item[0];
              label.includes('Réalisateur') ? (label = 'realisateur') : null;
              labelSlug = label.replace(/\W+/g, '-').toLowerCase();
            }

            return (
              <>
                <div key={labelSlug + i} className={styles.inputBox}>
                  <label className={styles.label} htmlFor={labelSlug}>
                    {label}
                    {item[0].startsWith('-required-') && (
                      <span className={styles.asterisque}> *</span>
                    )}
                  </label>
                  {item[0].startsWith('-textarea-') ? (
                    <textarea
                      form='createStoryForm'
                      key={labelSlug}
                      id={labelSlug}
                      name={labelSlug}
                      placeholder={item[1]}
                      className={styles.input + ' ' + styles.textarea}
                      onChange={(e) => handleRessourceInfos(e)}></textarea>
                  ) : (
                    <input
                      form='createStoryForm'
                      key={label}
                      id={labelSlug}
                      name={labelSlug}
                      className={`${styles.input} ${
                        item[0].startsWith('-textarea-') ? styles.textarea : ''
                      }`}
                      placeholder={item[1] + ' ...'}
                      type='text'
                      required={item[0].startsWith('-required-') ? true : false}
                      onChange={(e) => handleRessourceInfos(e)}></input>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }

  return <>{renderInputs(selected)}</>;
}

export default renderInputsRessource;
