import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../../utils/axiosRequest';

import styles from './Fieldset_Professionel.module.scss';
import Icon_search from '../../../../../public/assets/img/svgs/page-icons/icon-page-search.svg';
import ProNamesAsyncSelect from './ProNamesAsyncSelect';
import { renderInputsProInfos } from './renderInputsProInfos';

function Fieldset_Professionel({ story, setStory }) {
  const [proNamesProps, setProNamesProps] = useState([]);
  const [professionalConsulted, setProfessionalConsulted] = useState();
  const [inputError, setInputError] = useState();
  const [fetchingDB, setFetchingDB] = useState(false);

  // console.log('pro consulté : ', professionalConsulted);
  //
  const newProps = {
    story: story,
    setStory: setStory,
    proNamesProps: proNamesProps,
    professionalConsulted: professionalConsulted,
    setProfessionalConsulted: setProfessionalConsulted,
    fetchingDB: fetchingDB,
    setFetchingDB: setFetchingDB,
  };
  // useEffect appel BD pour récupérer les professionels
  useEffect(() => {
    async function getProfessionalsFromDB() {
      setFetchingDB(true);
      const res = await publicRequest.get(`/professional/`);
      const professionalsArray = await res.data;
      //
      const tempArray = [];
      professionalsArray.forEach((element) => {
        tempArray.push({
          label: `${
            element.titre + ' ' + element.name + ' ' + element.firstname
          }`,
          value: `${element._id}`,
          ...element,
        });
      });
      setProNamesProps(tempArray);
      setFetchingDB(false);
    }
    getProfessionalsFromDB();
  }, []);
  //
  return (
    <>
      <fieldset
        className={styles.fieldset}
        form='createStoryForm'
        name='professionnel'>
        <div className={styles.fieldsetHeader}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>
              Professionnel{' '}
              <span className={styles.facultatif}>(facultatif)</span>
            </h3>
          </div>
          <div className={styles.separation}></div>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='professional-select'>
            Mentionnez le professionnel consulté
          </label>

          {/* <pre>inputValue: "{inputValue}"</pre> */}
          <div className={styles.searchPro}>
            <ProNamesAsyncSelect props={newProps} />
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
        {professionalConsulted &&
          renderInputsProInfos(
            professionalConsulted,
            setProfessionalConsulted,
            inputError,
            story,
            setStory
          )}
      </fieldset>
    </>
  );
}

export default Fieldset_Professionel;
