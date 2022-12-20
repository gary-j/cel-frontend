import React, { useState, useContext, useEffect } from 'react';
import SigninForm from '../auth/signInForm/SigninForm';
import SignupFormContainer from './signUpForm/SignupFormContainer';
import styles from './SignFormContainer.module.scss';
import { BreakPointContext } from '../../context/breakPoints.context';

const SignFormContainer = (props) => {
  const [signForm, setSignForm] = useState('signin');
  //
  const { breakPoint } = useContext(BreakPointContext);
  //
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollMax, setScrollMax] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScrollMax(position > 200 ? true : false);
    // console.log('signformContainer scroll Y position : ', position);
  };
  //
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  //
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollMax]);
  //
  // console.log('*** PROPS SignFormContainer: ', props);
  let closeForm = props.closeForm;
  let newprops = {
    closeForm: closeForm,
    setSignForm: setSignForm,
  };

  return (
    <div className={styles.formContainer}>
      {signForm === 'signin' ? (
        <SigninForm props={newprops} cssBreakPoint={breakPoint} />
      ) : (
        <SignupFormContainer props={newprops} cssBreakPoint={breakPoint} />
      )}
    </div>
  );
};

export default SignFormContainer;
