import React, { useEffect } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';
import styles from '../SignupFormContainer.module.scss';
import Image from 'next/image';

const SignUpFormStep2 = ({ props, fieldStateProps }) => {
  const { displayNextFormPart, setDsiplayNextFormPart } = props;
  // FieldState from props
  const {
    errorMessage,
    inputError,
    selectedThemes,
    setSelectedThemes,
    themesFromDB,
    setThemesFromDB,
  } = fieldStateProps;
  // useEffect appel BD pour récupérer les thèmes hors staticprops
  useEffect(() => {
    async function getThemesFromDB() {
      // const res = await axios.get('http://localhost:5005/api/theme/all');
      const res = await publicRequest.get(`/theme/all`);
      const themes = await res.data;
      setThemesFromDB(themes);
    }
    getThemesFromDB();
  }, []);
  // Functions
  const handleToggle = (e) => {
    {
      /*console.log('*** selectedThemes *** : ', selectedThemes); */
    }

    let themeID = e.target.closest('div').dataset.target;
    //  console.log("*** handleToggle, voici l'id : ", themeID);
    let themeGroup = document.querySelectorAll(`[data-target='${themeID}']`);
    // console.log('*** handleToggle, themeGroup: ', themeGroup);
    //
    if (selectedThemes.includes(themeID)) {
      // Removing already selected theme
      const cleanedArray = selectedThemes.filter((item) => item !== themeID);
      setSelectedThemes(cleanedArray);
      // console.log('*** CLEANED ARRAY *** : ', cleanedArray);

      // console.log('*** REMOVE FROM selectedThemes *** : ', selectedThemes);
    } else if (
      selectedThemes.length <= 2 &&
      !selectedThemes.includes(themeID)
    ) {
      // Adding new theme

      setSelectedThemes((selectedThemes) => [...selectedThemes, themeID]);

      // console.log('*** ADD TO selectedThemes *** : ', selectedThemes);
    }
  };
  //
  return (
    <div
      className={`
${styles.fieldContainer + ' ' + styles.step2} ${
        displayNextFormPart === true ? styles.display : ''
      }
`}>
      <fieldset
        form='signupForm'
        id='themesSelection'
        className={`${styles.fieldset} `}>
        {inputError === 'themes' && (
          <span className={styles.themeError}>{errorMessage}</span>
        )}
        <div className={styles.themesContainer}>
          {themesFromDB.map((theme) => (
            <div
              key={theme._id}
              className={` ${styles.themeBtn} ${
                selectedThemes.includes(theme._id) ? styles.selected : ''
              } `}
              id={theme._id}
              data-target={theme._id}
              onClick={handleToggle}>
              <p data-target={theme._id} className={styles.text}>
                {theme.name}
              </p>

              <Image
                className={`${theme.svg_title} ${styles.svg}`}
                src={`${
                  selectedThemes.includes(theme._id)
                    ? `/assets/img/svgs/${theme.svg_title}-selected.svg`
                    : `/assets/img/svgs/${theme.svg_title}-unselected.svg`
                }`}
                alt={theme.svg_title}
                height='40px'
                width='40px'
                data-target={theme._id}></Image>
            </div>
          ))}
        </div>
        {inputError === 'themes' && (
          <span className={styles.themeError}>{errorMessage}</span>
        )}
        {/* <div> */}
        <button
          className={styles.backButton}
          onClick={(e) => {
            e.preventDefault();
            setDsiplayNextFormPart(false);
          }}>
          Revenir en arrière
        </button>
        {/* </div> */}
        <button type='submit' className={styles.btnVert}>
          Étape suivante
        </button>
      </fieldset>
    </div>
  );
};

export default SignUpFormStep2;
