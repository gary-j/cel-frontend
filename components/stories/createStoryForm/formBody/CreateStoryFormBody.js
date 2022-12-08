import React, { useState } from 'react';
import styles from './CreateStoryFormBody.module.scss';
import Fieldset_Histoire from './fieldset_Histoire/Fieldset_Histoire';
import Fieldset_Professionel from './fieldset_Professionel/Fieldset_Professionel';
import Fieldset_Ressource from './fieldset_Ressource/Fieldset_Ressource';

function CreateStoryFormBody({ user }) {
  const [story, setStory] = useState({
    writter: user?.id,
    theme: '',
    title: '',
    content: '',
    professionalConsulted: '',
    ressource: {},
    physicalTransformation: {
      isSelected: false,
      bodyPart: '',
      treatment: '',
      beforePictureUrl: '',
      afterPictureUrl: '',
      isSatisfied: false,
    },
    isAnonym: false,
  });
  const [ressource, setRessource] = useState({});
  console.log('story : ', story);
  return (
    <div className={styles.formBody}>
      <form
        id='createStoryForm'
        className={styles.form}
        // onSubmit={(e) => handleLoginSubmit(e)}
      >
        <Fieldset_Histoire
          story={story}
          setStory={setStory}></Fieldset_Histoire>
        <Fieldset_Professionel
          story={story}
          setStory={setStory}></Fieldset_Professionel>
        <Fieldset_Ressource
          user={user}
          story={story}
          setStory={setStory}
          ressource={ressource}
          setRessource={setRessource}></Fieldset_Ressource>
      </form>
    </div>
  );
}

export default CreateStoryFormBody;
