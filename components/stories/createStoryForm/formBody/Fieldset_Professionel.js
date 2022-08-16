import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';

import styles from './Fieldset_Professionel.module.scss';
import Icon_search from '../../../../public/assets/img/svgs/icon-page-search.svg';
import CustomAsyncSelect from './customInput/CustomAsyncSelect';

function Fieldset_Professionel() {
  const [proNamesProps, setProNamesProps] = useState([]);
  const [professionalConsulted, setProfessionalConsulted] = useState({});
  //
  let newProps = {
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
          adress: {
            city: element.city,
            zipcode: element.zipcode,
            country: element.country,
          },
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
            <CustomAsyncSelect props={newProps} />
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-city-select'>
            Ville
          </label>

          <div className={styles.searchPro}>
            {/* <CustomAsyncSelect proNames={proNamesProps} /> */}
            <input className={styles.input}></input>
          </div>
        </div>{' '}
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-city-select'>
            Domaine
          </label>

          <div className={styles.searchPro}>
            {/* <CustomAsyncSelect proNames={proNamesProps} /> */}
            <input className={styles.input}></input>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default Fieldset_Professionel;
