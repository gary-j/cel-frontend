import React, { useRef, useState } from 'react';
import styles from './Fieldset_Anonym.module.scss';
import Icon_checkboxOn from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-on.svg';
import Icon_checkboxOff from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-off.svg';

function Fieldset_Anonym({ story, setStory }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e) => {
    let boolean = e.target.dataset.target === 'true';
    setIsChecked(boolean);
    setStory({
      ...story,
      ['isAnonym']: boolean,
    });
  };
  // console.log('story de isAnonym : ', story);
  return (
    <fieldset className={styles.fieldset} form='createStoryForm' name='Anonym'>
      <div className={styles.wrapper} onClick={handleChecked}>
        {/* <input
          className={styles.hidden}
          type='checkbox'
          id='isAnonym'
          name='isAnonym'
          // checked={isChecked}
        ></input> */}
        {isChecked ? (
          <>
            <Icon_checkboxOn
              className={styles.checkbox}
              data-target='false'
              onClick={handleChecked}
            />
            <label
              className={styles.label}
              htmlFor='isAnonym'
              data-target='false'
              onClick={handleChecked}>
              Je souhaite rester anonyme
            </label>
          </>
        ) : (
          <>
            <Icon_checkboxOff
              className={styles.checkbox}
              data-target='true'
              onClick={handleChecked}
            />
            <label
              className={styles.label}
              htmlFor='isAnonym'
              data-target='true'
              onClick={handleChecked}>
              Je souhaite rester anonyme
            </label>
          </>
        )}
      </div>
    </fieldset>
  );
}

export default Fieldset_Anonym;
