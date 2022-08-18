import React, { useState, useId } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { publicRequest } from '../../../../../utils/axiosRequest';
import styles from '../Fieldset_Professionel.module.scss';
import { ProNamesStyles } from './stylesCustomSelect';
function ProNamesAsyncSelect({ props }) {
  const { proNamesProps, professionalConsulted, setProfessionalConsulted } =
    props;
  //
  const [filteredProNames, setFilteredProNames] = useState([]);
  //
  //
  const getProsFromDB = (inputValue, callback) => {
    setTimeout(async () => {
      try {
        const res = await publicRequest.get(`/professional/${inputValue}`);
        const professionalsArray = await res.data;
        //
        const tempArray = [];
        await professionalsArray.forEach((element) => {
          tempArray.push({
            label: `${
              element.titre + ' ' + element.name + ' ' + element.firstname
            }`,
            value: `${element._id}`,
            address: {
              city: element.city,
              zipcode: element.zipcode,
              country: element.country,
            },
            domain: element.domain,
          });
        });
        setFilteredProNames(tempArray);
        callback(tempArray);
      } catch (error) {
        console.log('catch th hoop : ', error);
      }
    }, 800);
  };
  //
  const handleChange = (value) => setProfessionalConsulted(value);
  return (
    <>
      <AsyncCreatableSelect
        id='selectProNameBox'
        // instanceId='selectProNameBox'
        instanceId={useId()}
        className={styles.gary}
        styles={ProNamesStyles}
        placeholder='Mr Professionnel...'
        form='createStoryForm'
        name='search-professional'
        allowCreateWhileLoading={false}
        formatCreateLabel={(userInputValue) => `Créer : " ${userInputValue} "`}
        cacheOptions
        defaultOptions={proNamesProps}
        loadOptions={getProsFromDB}
        // onInputChange={() => {
        //   handleInputChange;
        // }}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
}

export default ProNamesAsyncSelect;
