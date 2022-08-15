import React, { useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { publicRequest } from '../../../../../utils/axiosRequest';

function CustomAsyncSelect({ proNames }) {
  //
  const [userInputValue, setUserInputValue] = useState('');
  console.log('userInput value : ', userInputValue);
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: '100%',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      width: '100%',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: 'blue',
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: '13px',
      fontFamily: 'Poppins',
      fontWeight: '300',
      letterSpacing: '0.6px',
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
      <pre>inputValue: "{userInputValue}"</pre>
      <br></br>

      <AsyncCreatableSelect
        styles={customStyles}
        placeholder='Dr. Professionel'
        form='createStoryForm'
        name='search-professional'
        allowCreateWhileLoading={false}
        formatCreateLabel={(userInputValue) => `Créer : " ${userInputValue} "`}
        cacheOptions
        defaultOptions={proNames}
        loadOptions={getProsFromDB}
        onInputChange={handleInputChange}
      />
    </>
  );
}

export default CustomAsyncSelect;
