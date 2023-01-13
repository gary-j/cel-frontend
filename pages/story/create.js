import React, { useContext } from 'react';
import styles from './create.module.scss';
import CreateStoryFormContainer from '../../components/stories/createStoryForm/CreateStoryFormContainer';
import { AuthContext } from '../../context/auth.context';

function Create() {
  const { user } = useContext(AuthContext);
  // console.log('user du context : ', user);
  return (
    <>
      {/* <div className={styles.create}>create</div>; */}
      <CreateStoryFormContainer user={user}></CreateStoryFormContainer>
    </>
  );
}

export default Create;
