import React, { useEffect, useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { publicRequest } from '../../../../../utils/axiosRequest';
import styles from '../Fieldset_Professionel.module.scss';
import { cssContainer, cssControl } from './stylesCustomSelect';
function CustomAsyncSelect({ props }) {
  const { proNamesProps, professionalConsulted, setProfessionalConsulted } =
    props;
  //
  const [filteredProNames, setFilteredProNames] = useState([]);
  //
  const customStyles = {
    container: (_, state) => ({
      // ...provided,
      ...cssContainer,
      borderColor: state.isFocused ? '#01989F' : '',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      ...cssControl,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isHover ? 'red' : '#00565b',
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted black',
      color: state.isSelected ? '#01989F' : 'black',
      backgroundColor: state.isSelected ? 'white' : '',
      // backgroundColor: state.isFocused ? '#01989F' : 'white',
      padding: '1.3em',
      fontSize: '1.3em',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: '14px',
      fontFamily: 'Poppins',
      fontWeight: '300',
      letterSpacing: '0.1px',
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };
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
            adress: {
              city: element.city,
              zipcode: element.zipcode,
              country: element.country,
            },
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
        className={styles.gary}
        styles={customStyles}
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
          // setProfeshConsulted(e);
        }}
        value={professionalConsulted}
      />
    </>
  );
}

export default CustomAsyncSelect;
