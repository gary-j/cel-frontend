import React from 'react';
import styles from './renderTransformationPart.module.scss';

function renderTransformationPart(ressource, setRessource) {
  return (
    <div className={styles.part2}>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='bodyPart'>
          Partie du corps <span className={styles.asterisque}>*</span>
        </label>
        <select
          form='createStoryForm'
          name='bodyPart'
          id='bodyPart'
          required
          className={styles.input}>
          <option>Oreille</option>
          <option selected>Visage</option>
          <option>Nez</option>
        </select>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='treatment'>
          Traitement / Opération / Programme{' '}
          <span className={styles.asterisque}>*</span>
        </label>
        <input
          form='createStoryForm'
          type='text'
          required
          placeholder='lifting...'
          className={styles.input}></input>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='photoAvant' className={styles.label}>
          Photo avant
        </label>
        <input
          type='file'
          accept='image/*, .pdf'
          id='photoAvant'
          name='beforeUrl'></input>
      </div>
    </div>
  );
}

export default renderTransformationPart;
