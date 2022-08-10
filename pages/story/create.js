import React from 'react';
import styles from './create.module.scss';
import CreateStoryFormContainer from '../../components/stories/createStoryForm/CreateStoryFormContainer';

function create() {
  return (
    <>
      {/* <div className={styles.create}>create</div>; */}
      <CreateStoryFormContainer></CreateStoryFormContainer>
    </>
  );
}

export default create;
