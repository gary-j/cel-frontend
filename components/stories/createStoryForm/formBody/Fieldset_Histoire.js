import React from 'react';
import styles from './Fieldset_Histoire.module.scss';
import UpStyles from './CreateStoryFormBody.module.scss';

function Fieldset_Histoire() {
  return (
    <>
      <fieldset
        className={styles.fieldset}
        form='createStoryForm'
        name='histoire'>
        <div className={styles.fieldsetHeader}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>Histoire</h3>
          </div>
          <div className={styles.separation}></div>
        </div>
      </fieldset>
    </>
  );
}

export default Fieldset_Histoire;
