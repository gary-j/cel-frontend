import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../../utils/axiosRequest';
import styles from './Fieldset_Histoire.module.scss';
import Select from 'react-select';
import { DropDownSelectStyles } from '../../../../shared/reactSelectCustomStyles';
//
function Fieldset_Histoire({ story, setStory }) {
  const [themes, setThemes] = useState([]);
  const [themesSelect, setThemesSelect] = useState([]);
  const caracteresLimit = 1200;
  const [message, setMessage] = useState('Ça a commencé par... ');
  // console.log(themes);
  // useEffect appel BD pour récupérer les thèmes
  useEffect(() => {
    async function getThemesFromDB() {
      const res = await publicRequest.get(`/theme/all`);
      const themesDB = await res.data;
      // setThemes(themesDB);
      //
      const tempArray = [];
      await themesDB.forEach((element) => {
        tempArray.push({
          label: element.name,
          value: element._id,
          ...element,
        });
      });
      setThemes(tempArray);
    }
    getThemesFromDB();
  }, []);
  //
  const handleSelectTheme = (e) => {
    setStory({ ...story, theme: e.value });
  };
  //
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setStory({ ...story, content: event.target.value });
  };
  //
  const moveCaretAtEnd = (e) => {
    var temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  console.log('message : ', message);
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
            Choix du thème <span className={styles.asterisque}>&nbsp;*</span>
          </label>
          {/* <select
            id='theme-select'
            form='createStoryForm'
            name='themes'
            onChange={(e) => handleSelectTheme(e)}
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
          </select> */}
          <Select
            id='theme-select'
            instanceId='theme-select'
            name='themes'
            form='createStoryForm'
            styles={DropDownSelectStyles}
            placeholder='Amitié...'
            defaultValue={themes[0]}
            options={themes}
            onChange={(e) => handleSelectTheme(e)}></Select>
        </div>
        <div className={styles.inputBox + ' ' + styles.content}>
          <label className={styles.label} htmlFor='content'>
            {' '}
            Racontez votre histoire{' '}
            <span className={styles.asterisque}>&nbsp;*</span>
          </label>
          <textarea
            id='content'
            name='content'
            maxLength={caracteresLimit}
            value={message}
            placeholder='Ça a commencé par...'
            autoFocus
            onFocus={moveCaretAtEnd}
            className={styles.input + ' ' + styles.textarea}
            onChange={handleMessageChange}></textarea>
          <div className={styles.caracteresLimite}>
            <p className={styles.p}>
              {caracteresLimit - message.length > 1
                ? `${caracteresLimit - message.length} caractères restants.`
                : `${caracteresLimit - message.length} caractère restant.`}
            </p>
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
        {/* <div className={styles.annonce}>
          <p className={styles.p + ' ' + 'pourEtrePublie'}>Pour être publié:</p>
          <ul>
            <li>• Choisissez le thème le plus approprié</li>
            <li>• Publicité, spam, hors-sujet : Non merci !</li>
            <li>• Clarté, concision, respect et bienveillance : À volonté !</li>
          </ul>
        </div> */}
      </fieldset>
    </>
  );
}

export default Fieldset_Histoire;
