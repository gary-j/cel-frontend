import React, { useId } from 'react';
import styles from './Fieldset_Ressource.module.scss';
var slugify = require('slugify');

export function renderInputsRessource(
  selected,
  story,
  setStory
  // inputError,
) {
  const data = {
    citation: {
      ['-required- Citation']:
        'Quand la vie te donne un citron, fais-en une limonade',
      ['Auteur de la citation']: 'Inconnu',
    },
    film: {
      ['-required- Titre du film']: 'Titre du film',
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
      ['-required- Titre du livre']: 'Titre du livre',
      ['-required- Auteur du livre']: 'Auteur du livre',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    musique: {
      ['-required- Titre de la chanson']: 'Titre de la chanson',
      ["-required- Nom de l'artiste"]: "Nom de l'artiste",
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    podcast: {
      ['-required- Titre du podcast']: 'Titre du podcast',
      ['-required- Auteur du podcast']: 'Auteur du podcast',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    série: {
      ['-required- Titre de la série']: 'Titre de la série',
      ['Acteur principal']: 'Acteur 1',
      ['Acteur 2']: 'Acteur 2',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    vidéo: {
      ['-required- Titre de la vidéo']: 'Titre de la vidéo',
      ['Auteur de la vidéo']: 'Auteur de la vidéo',
      ['Site de la vidéo']: 'Url de la vidéo',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
  };
  // console.log('data[2] : ', Object.keys(data)[2]);
  // console.log('Ressource... : ', ressource);

  //
  const handleRessourceInfos = (e) => {
    // console.log('e.target : ', e.target);
    setStory({
      ...story,
      ressourceToCreate: {
        ...story.ressourceToCreate,
        complete: {
          ...story.ressourceToCreate.complete,
          [slugify(selected, { lower: true })]: {
            ...story.ressourceToCreate.complete[selected],
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  };
  //

  let labelsAndInputs = Object.entries(data[selected]);
  // console.log('labelsandinpupts : ', labelsAndInputs);
  return (
    <>
      {labelsAndInputs.map((item) => {
        {
          /* console.log('item[0] : ', item[0]); */
        }
        let label = item[0].replace(/(-required-)|(-textarea-)/, '');
        let labelSlug = slugify(label, {
          lower: true,
        });

        return (
          <div key={labelSlug} className={styles.inputBox}>
            <label className={styles.label} htmlFor={labelSlug}>
              {label}
              {item[0].startsWith('-required-') && (
                <span className={styles.asterisque}> *</span>
              )}
            </label>
            {item[0].startsWith('-textarea-') ? (
              <textarea
                form='createStoryForm'
                id={labelSlug}
                name={labelSlug}
                placeholder={item[1]}
                className={styles.input + ' ' + styles.textarea}
                onChange={(e) => handleRessourceInfos(e)}></textarea>
            ) : (
              <input
                form='createStoryForm'
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
        );
      })}
    </>
  );

  return <>{renderInputs(selected)}</>;
}
