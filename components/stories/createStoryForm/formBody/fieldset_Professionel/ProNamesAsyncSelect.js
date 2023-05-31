import React, { useState, useId } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { publicRequest } from '../../../../../utils/axiosRequest';
import styles from './Fieldset_Professionel.module.scss';
import { DropDownSelectStyles } from '../../../../shared/reactSelectCustomStyles';

function ProNamesAsyncSelect({ props }) {
  const {
    story,
    setStory,
    proNamesProps,
    professionalConsulted,
    setProfessionalConsulted,
    fetchingDB,
    setFetchingDB,
  } = props;
  //
  const [filteredProNames, setFilteredProNames] = useState([]);
  //
  //
  const getProsFromDB = (inputValue, callback) => {
    setTimeout(async () => {
      try {
        setFetchingDB(true);
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
            ...element,
          });
        });
        setFilteredProNames(tempArray);
        callback(tempArray);
        setFetchingDB(false);
      } catch (error) {
        console.log('catch th hoop : ', error);
      }
    }, 800);
  };
  //
  const handleChange = (value) => {
    if (value.name) {
      setProfessionalConsulted(value);
      setStory({ ...story, professionalConsulted: value._id });
      return;
    } else {
      let pro = {
        ...value,
        titre: '',
        name: '',
        firstname: '',
        address: '',
        zipcode: '',
        city: '',
        country: '',
        domain: '',
      };
      setProfessionalConsulted(pro);
      // story.professionalConsulted = '';
      setStory({
        ...story,
        // professionalConsulted: '',
        professionalToCreate: pro,
      });
      return;
    }
  };
  //
  return (
    <>
      <AsyncCreatableSelect
        id='selectProNameBox'
        // instanceId='selectProNameBox'
        instanceId={useId()}
        className={styles.gary}
        styles={DropDownSelectStyles}
        placeholder='M. Professionnel...'
        form='createStoryForm'
        name='search-professional'
        allowCreateWhileLoading={false}
        formatCreateLabel={(userInputValue) =>
          `Ajouter un professionel : " ${userInputValue} "`
        }
        cacheOptions
        defaultOptions={proNamesProps}
        loadOptions={getProsFromDB}
        isLoading={fetchingDB}
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
