import React, { useId } from 'react';
import styles from './Fieldset_Ressource.module.scss';

function RenderInputsRessource(selected, ressource, setRessource, inputError) {
  const data = {
    citation: {
      ['-textarea- Citation']:
        'Si la vie te donne un citron, fait une limonade.',
      ['Auteur de la citation']: 'La Vie',
    },
    film: {
      ['-required- Titre du film']: 'titre du film',
      ['Acteur principal']: 'Acteur 1',
      ['Acteur 2']: 'Acteur 2',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    influenceur: {
      ['Nom du compte Youtube ou Instagram']: '@Citron_en_limonade',
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
    serie: {
      ['-required- Titre de la série']: 'titre de la série',
      ['Acteur principal']: 'Acteur 1',
      ['Acteur principal']: 'Acteur 2',
      ['-textarea- Pourquoi cette ressource ?']:
        'Expliquez brièvement pourquoi vous recommandez cette ressource.',
    },
    video: {
      ['-required- Titre de la vidéo']: 'titre de la vidéo',
      ['-required- Auteur de la vidéo']: 'auteur de la vidéo',
      ['Site de la vidéo']: 'url de la vidéo',
    },
  };
  // console.log('data[2] : ', Object.keys(data)[2]);
  console.log('Ressource... : ', ressource);

  //
  const handleRessourceInfos = (e) => {
    console.log('e.target : ', e.target);
    setRessource({ ...ressource, [e.target.name]: e.target.value });
  };
  //
  function RenderInputs(selected) {
    let labelsAndInputs = Object.entries(data[selected]);
    return (
      <>
        {labelsAndInputs.map((item) => {
          let key;
          let keySlug;
          if (
            item[0].startsWith('-required-') ||
            item[0].startsWith('-textarea-')
          ) {
            key = item[0].slice(11);
            keySlug = key.replace(/\W+/g, '-').toLowerCase();
            // remplace tout ce qui n'est pas alphanumérique par '-'
          } else {
            key = item[0];
            keySlug = key.replace(/\W+/g, '-').toLowerCase();
          }

          return (
            <>
              <div key={keySlug} className={styles.inputBox}>
                <label className={styles.label} htmlFor={keySlug}>
                  {key}
                  {item[0].startsWith('-required-') && (
                    <span className={styles.asterisque}> *</span>
                  )}
                </label>
                {item[0].startsWith('-textarea-') ? (
                  <textarea
                    form='createStoryForm'
                    key={key}
                    id={keySlug}
                    name={keySlug}
                    placeholder={item[1]}
                    className={styles.input + ' ' + styles.textarea}
                    onChange={(e) => handleRessourceInfos(e)}></textarea>
                ) : (
                  <input
                    form='createStoryForm'
                    key={key}
                    id={keySlug}
                    name={keySlug}
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
      </>
    );
  }

  return <>{RenderInputs(selected)}</>;
}

export default RenderInputsRessource;
