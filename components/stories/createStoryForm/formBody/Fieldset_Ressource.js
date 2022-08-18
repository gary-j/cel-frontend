import React, { useEffect, useState } from 'react';
import styles from './Fieldset_Ressource.module.scss';

function Fieldset_Ressource() {
  const data = [
    'citation',
    'film',
    'influenceur',
    'livre',
    'musique',
    'podcast',
    'serie',
  ];
  const [selected, setSelected] = useState(null);
  const [ressource, setRessource] = useState([]);
  //   console.log(
  //     selected
  //       ? `Ressource sélectionnée : ${selected}`
  //       : 'aucune ressource selectionnée !'
  //   );
  //
  const handleSelect = (e) => {
    let id = e.target.closest('div').dataset.target;
    // console.log('*** appui sur : ', id);
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  //
  return (
    <fieldset
      className={styles.fieldset}
      form='createStoryForm'
      name='Ressources'>
      <div className={styles.fieldsetHeader}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>Ressources</h3>
        </div>
        <div className={styles.separation}></div>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='ressource-select'>
          Recommander une ressource liée à votre histoire
        </label>
      </div>
      <div className={styles.selectRessource}>
        {data.map((i) => {
          return (
            <div
              key={i}
              data-target={i}
              className={` 
                ${styles.button} ${selected === i ? styles.selected : ''} 
              `}
              onClick={handleSelect}>
              <p data-target={i} className={styles.text}>
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </p>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

export default Fieldset_Ressource;
