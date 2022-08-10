import React from 'react';
import styles from './CreateStoryFormContainer.module.scss';
import CreateStoryFormBody from './formBody/CreateStoryFormBody';
import CreateStoryFormHeader from './formHeader/CreateStoryFormHeader';

const CreateStoryFormContainer = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <CreateStoryFormHeader></CreateStoryFormHeader>
          <CreateStoryFormBody></CreateStoryFormBody>
        </div>
      </div>
    </>
  );
};

export default CreateStoryFormContainer;
