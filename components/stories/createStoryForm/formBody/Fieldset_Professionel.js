import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';

import styles from './Fieldset_Professionel.module.scss';
import Icon_search from '../../../../public/assets/img/svgs/icon-page-search.svg';
import CustomAsyncSelect from './customInput/CustomAsyncSelect';

function Fieldset_Professionel() {
  const [professionalsDB, setProfessionalsDB] = useState([]);
  const [proNames, setProNames] = useState([]);
  const [professionalConsulted, setProfessionalConsulted] = useState({});
  const [inputValue, setInputValue] = useState('');
  // console.log('professionalsDb *** : ', professionalsDB);
  // useEffect appel BD pour récupérer les professionels
  useEffect(() => {
    async function getProfessionalsFromDB() {
      const res = await publicRequest.get(`/professional/`);
      const professionalsArray = await res.data;
      setProfessionalsDB(professionalsArray);
      //
      const tempArray = [];
      professionalsArray.forEach((element) => {
        tempArray.push({ label: `${element.name}`, value: `${element._id}` });
      });
      setProNames(tempArray);
    }
    getProfessionalsFromDB();
    console.log('appel useeffct fetch professionals');
  }, [inputValue]);
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
            <CustomAsyncSelect proNames={proNames} />
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-city-select'>
            Ville
          </label>

          <div className={styles.searchPro}>
            {/* <CustomAsyncSelect proNames={proNames} /> */}
            <input className={styles.input}></input>
          </div>
        </div>{' '}
      </fieldset>
    </>
  );
}

export default Fieldset_Professionel;
