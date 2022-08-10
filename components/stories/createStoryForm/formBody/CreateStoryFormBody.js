import React from 'react';
import styles from './CreateStoryFormBody.module.scss';
import Fieldset_Histoire from './Fieldset_Histoire';

function CreateStoryFormBody() {
  return (
    <div className={styles.formBody}>
      <form
        id='createStoryForm'
        className={styles.form}
        // onSubmit={(e) => handleLoginSubmit(e)}
      >
        <Fieldset_Histoire></Fieldset_Histoire>
      </form>
    </div>
  );
}

export default CreateStoryFormBody;
