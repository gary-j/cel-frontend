import React from 'react';
import styles from './CreateStoryFormBody.module.scss';
import Fieldset_Histoire from './Fieldset_Histoire';
import Fieldset_Professionel from './Fieldset_Professionel';

function CreateStoryFormBody() {
  return (
    <div className={styles.formBody}>
      <form
        id='createStoryForm'
        className={styles.form}
        // onSubmit={(e) => handleLoginSubmit(e)}
      >
        <Fieldset_Histoire></Fieldset_Histoire>
        <Fieldset_Professionel></Fieldset_Professionel>
      </form>
    </div>
  );
}

export default CreateStoryFormBody;
