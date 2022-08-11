import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';
import styles from './Fieldset_Histoire.module.scss';
import UpStyles from './CreateStoryFormBody.module.scss';

function Fieldset_Histoire() {
  const [themes, setThemes] = useState([]);
  console.log(themes);
  // useEffect appel BD pour récupérer les thèmes
  useEffect(() => {
    async function getThemesFromDB() {
      const res = await publicRequest.get(`/theme/all`);
      const themesDB = await res.data;
      setThemes(themesDB);
    }
    getThemesFromDB();
  }, []);
  //
  return (
    <>
      <fieldset
        className={styles.fieldset}
        form='createStoryForm'
        name='histoire'>
        <div className={styles.fieldsetHeader}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>Histoire</h3>
          </div>
          <div className={styles.separation}></div>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='theme-select'>
            Choix du thème <span className={styles.asterisque}>*</span>
          </label>
          <select
            id='theme-select'
            form='createStoryForm'
            name='themes'
            className={styles.input + ' ' + styles.select}>
            {themes.map((theme) => (
              <option
                key={theme.number}
                value={theme._id}
                title={theme.name}
                className={styles.option}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputBox + ' ' + styles.content}>
          <label className={styles.label} htmlFor='content'>
            {' '}
            Racontez votre histoire <span className={styles.asterisque}>*</span>
          </label>
          <textarea
            id='content'
            name='content'
            placeholder='Ça a commencé par...'
            className={styles.input + ' ' + styles.textarea}></textarea>
          <div className={styles.caracteresLimite}>
            <p className={styles.p}>1200 caractères restants.</p>
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
      </fieldset>
    </>
  );
}

export default Fieldset_Histoire;
