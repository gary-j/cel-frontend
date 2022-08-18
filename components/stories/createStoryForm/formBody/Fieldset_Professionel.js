import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';

import styles from './Fieldset_Professionel.module.scss';
import Icon_search from '../../../../public/assets/img/svgs/icon-page-search.svg';
import ProNamesAsyncSelect from './customInput/ProNamesAsyncSelect';
import { renderInputProInfos } from './customInput/renderInputProInfos';

function Fieldset_Professionel() {
  const [proNamesProps, setProNamesProps] = useState([]);
  const [professionalConsulted, setProfessionalConsulted] = useState();
  const [inputError, setInputError] = useState();

  // console.log('pro consulté : ', professionalConsulted);
  //
  const newProps = {
    proNamesProps: proNamesProps,
    professionalConsulted: professionalConsulted,
    setProfessionalConsulted: setProfessionalConsulted,
  };
  // useEffect appel BD pour récupérer les professionels
  useEffect(() => {
    async function getProfessionalsFromDB() {
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
            <h3 className={styles.title}>Professionnel</h3>
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
          renderInputProInfos(
            professionalConsulted,
            setProfessionalConsulted,
            inputError
          )}
      </fieldset>
    </>
  );
}

export default Fieldset_Professionel;
