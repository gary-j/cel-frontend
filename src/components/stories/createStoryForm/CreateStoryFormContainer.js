import React from 'react';
import styles from './CreateStoryFormContainer.module.scss';
import CreateStoryFormBody from './formBody/CreateStoryFormBody';
import CreateStoryFormHeader from './formHeader/CreateStoryFormHeader';

const CreateStoryFormContainer = ({ user }) => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <CreateStoryFormHeader></CreateStoryFormHeader>
          <CreateStoryFormBody user={user}></CreateStoryFormBody>
        </div>
      </div>
    </>
  );
};

export default CreateStoryFormContainer;
