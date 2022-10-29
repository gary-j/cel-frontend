import React, { useContext } from 'react';
import styles from './create.module.scss';
import CreateStoryFormContainer from '../../components/stories/createStoryForm/CreateStoryFormContainer';
import { AuthContext } from '../../context/auth.context';

function create() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {/* <div className={styles.create}>create</div>; */}
      <CreateStoryFormContainer user={user}></CreateStoryFormContainer>
    </>
  );
}

export default create;
