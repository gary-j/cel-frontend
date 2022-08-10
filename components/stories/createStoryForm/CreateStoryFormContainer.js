import React from 'react';
import styles from './CreateStoryFormContainer.module.scss';
import CreateStoryFormHeader from './formHeader/CreateStoryFormHeader';

const CreateStoryFormContainer = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <CreateStoryFormHeader></CreateStoryFormHeader>
        </div>
      </div>
    </>
  );
};

export default CreateStoryFormContainer;
