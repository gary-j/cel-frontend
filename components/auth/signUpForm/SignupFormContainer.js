import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/auth.context';
import { useRouter } from 'next/router';
import styles from './SignupFormContainer.module.scss';
import SuccessSignup from './formBody/SuccessSignup';
import SignUpFormHeader from './formHeader/SignUpFormHeader';
import SignUpFormBody from './formBody/SignUpFormBody';

//
// plus de themes en props provenant getStaticProps, useEffect à la place
const SignupForm = (props) => {
  const { closeForm, cssBreakPoint, setSignForm } = props;
  const { storeToken, authenticateUser, isLoading, setIsLoading, user } =
    useContext(AuthContext);

  const [displayNextFormPart, setDsiplayNextFormPart] = useState(true);
  const [successSignUp, setSuccessSignUp] = useState(false);
  //
  const router = useRouter();
  //   const navigate = useNavigate();
  //
  let newProps = {
    cssBreakPoint: props.cssBreakPoint,
    closeForm: props.props.closeForm,
    setSignForm: props.props.setSignForm,
    displayNextFormPart: displayNextFormPart,
    setDsiplayNextFormPart: setDsiplayNextFormPart,
    successSignUp: successSignUp,
    setSuccessSignUp: setSuccessSignUp,
  };

  return (
    <>
      <div
        className={`${styles.formContent} ${
          successSignUp ? styles.successSignup : ''
        } ${
          cssBreakPoint === 'desktop' || cssBreakPoint === 'laptop'
            ? styles.desktop
            : null
        } ${displayNextFormPart ? styles.secondPart : null} ${
          successSignUp ? styles.thirdPart : null
        }`}>
        <></>
        <SignUpFormHeader props={newProps}></SignUpFormHeader>
        <></>
        <div className={styles.formBody}>
          {successSignUp ? (
            <div className={styles.successBody}>
              <SuccessSignup props={props.props} user={user}></SuccessSignup>
            </div>
          ) : (
            <SignUpFormBody props={newProps}></SignUpFormBody>
          )}
        </div>
      </div>
    </>
  );
};

export default SignupForm;
