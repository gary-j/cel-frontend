import React, { useRef, useState } from 'react';
import styles from './Fieldset_Anonym.module.scss';
import Icon_checkboxOn from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-on.svg';
import Icon_checkboxOff from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-off.svg';

function Fieldset_Anonym({ story, setStory }) {
  const [isChecked, setIsChecked] = useState(true);
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
    setStory({
      ...story,
      isAnonym: isChecked,
    });
  };

  return (
    <fieldset className={styles.fieldset} form='createStoryForm' name='Anonym'>
      <div onClick={handleChecked}>
        <input
          className={styles.hidden}
          type='checkbox'
          id='isAnonym'
          name='isAnonym'
          checked={isChecked}></input>
        {isChecked ? <Icon_checkboxOn /> : <Icon_checkboxOff />}
        <label htmlFor='isAnonym' onClick={handleChecked}>
          Je souhaite rester anonyme
        </label>
      </div>
    </fieldset>
  );
}

export default Fieldset_Anonym;
