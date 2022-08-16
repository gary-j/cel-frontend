import React, { useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { publicRequest } from '../../../../../utils/axiosRequest';
import styles from '../Fieldset_Professionel.module.scss';
import { cssContainer, cssControl } from './stylesCustomSelect';
function CustomAsyncSelect({ proNames }) {
  //
  const [userInputValue, setUserInputValue] = useState('');
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
  const filterPros = (inputvalue) => {
    console.log(
      'filtered pro names : ',
      proNames.filter((i) =>
        i.label.toLowerCase().includes(inputvalue.toLowerCase())
      )
    );
    return proNames.filter((i) =>
      i.label.toLowerCase().includes(inputvalue.toLowerCase())
    );
  };

  //
  const getProsFromDB = async (inputValue, callback) => {
    try {
      //   const res = await publicRequest.get(`/professional/`);
      //   const professionalsArray = await res.data;
      //   //   setProfessionalsDB(professionalsArray);
      //   //
      //   const tempArray = [];
      //   professionalsArray.forEach((element) => {
      //     tempArray.push({ label: `${element.name}`, value: `${element._id}` });
      //   });
      //   setProNames(...[], tempArray);
      callback(filterPros(inputValue));
    } catch (error) {
      console.log('catch th hoop : ', error);
    }
  };
  //
  const handleInputChange = (newValue) => {
    setUserInputValue(newValue.replace(/\W/g, ''));
  };
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
        defaultOptions={proNames}
        loadOptions={getProsFromDB}
        onInputChange={handleInputChange}
        // value={selectedOption}
      />
    </>
  );
}

export default CustomAsyncSelect;
