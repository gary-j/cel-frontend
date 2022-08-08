import React, { useState, useContext, useEffect } from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import styles from './SignFormContainer.module.scss';
import { BreakPointContext } from '../../context/breakPoints.context';

const SignFormContainer = (props) => {
  const [signForm, setSignForm] = useState('signin');
  //
  const { breakPoint } = useContext(BreakPointContext);
  //
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log('signformContainer scroll Y position : ', position);
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
  }, [scrollPosition > 200]);
  //
  // console.log('*** PROPS SigngormContainer: ', props);
  let newprops = {
    closeForm: props.closeForm,
    setSignForm: setSignForm,
  };

  return (
    <div className={styles.formContainer}>
      {signForm === 'signin' ? (
        <SigninForm props={newprops} cssBreakPoint={breakPoint} />
      ) : (
        <SignupForm props={newprops} cssBreakPoint={breakPoint} />
      )}
    </div>
  );
};

export default SignFormContainer;
