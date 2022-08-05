import React from 'react';
import { useState, useContext } from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import styles from './SignFormContainer.module.scss';
import { BreakPointContext } from '../../context/breakPoints.context';
import { HideThisComponentContext } from '../../context/hideThisComponent.context';

const SignFormContainer = (props) => {
  const [signForm, setSignForm] = useState('signin');
  // console.log('*** PROPS SigngormContainer: ', props);
  //
  const { breakPoint } = useContext(BreakPointContext);
  const { isHidden, setIsHidden } = useContext(HideThisComponentContext);
  //
  let newprops = {
    closeForm: props.closeForm,
    setSignForm: setSignForm,
    isHidden: isHidden,
    setIsHidden: setIsHidden,
    cssBreakPoint: breakPoint,
  };
  return (
    <div className={styles.formContainer}>
      {signForm === 'signin' ? (
        <SigninForm props={newprops} />
      ) : (
        <SignupForm props={newprops} />
      )}
    </div>
  );
};

export default SignFormContainer;
