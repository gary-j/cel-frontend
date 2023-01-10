const cssContainer = {
  position: 'relative', // très important pour la div de selection de professionnels qui est en absolute
  width: '100%',
  height: '40px',
  // padding: '12px 16px 16px',
  paddingLeft: '6px',
  borderRadius: '4px',
  border: 'solid 1px ',
  backgroundColor: '#f5f7f8',
  marginTop: '0.3em !important',
  marginBottom: 'unset',
  cursor: 'pointer',
};

const cssControl = {
  display: 'flex',
  width: '100%',
};

const cssOption = {};

const DropDownSelectStyles = {
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
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    return {
      ...provided,
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      color: '#191919',
      // opacity,
      // transition,
    };
  },
};

export { DropDownSelectStyles };
