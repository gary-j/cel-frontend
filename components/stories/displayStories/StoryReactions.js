import React from 'react';
import styles from './StoryReactions.module.scss';
import Icon_be_strong_hug from '../../../public/assets/img/svgs/reactions-icons/be-strong-hug.svg';
import Icon_like from '../../../public/assets/img/svgs/reactions-icons/like.svg';
import Icon_good_writer_gold from '../../../public/assets/img/svgs/reactions-icons/good-writer-gold.svg';
import Icon_me_too from '../../../public/assets/img/svgs/reactions-icons/me-too.svg';
import Icon_wow from '../../../public/assets/img/svgs/reactions-icons/wow.svg';
//
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
const StoryReactions = ({ storyID, cssBreakPoint }) => {
  // console.log(
  //   '*** props StoryReactions.js *** : ',
  //   storyID,
  //   ' et le breakpoint : ',
  //   cssBreakPoint
  // );
  return (
    <>
      <div
        className={`${styles.storyReaction} ${
          cssBreakPoint === 'desktop' ? styles.desktop : ''
        }`}>
        <div className={styles.reactionBox + ' ' + styles.selected}>
          {/* <div>
          <p
            className={styles.iconReaction}
            role='img'
            aria-label='partying face'>
            {String.fromCodePoint(0x1f973)}
          </p>
        </div> */}
          <Icon_like
            className={styles.iconReaction}
            role='img'
            aria-label='thumb up'></Icon_like>
        </div>
        <div className={styles.reactionBox}>
          <Icon_me_too
            className={styles.iconReaction}
            role='img'
            aria-label='icon me too'></Icon_me_too>
          <div>
            {/* <p className={styles.numberReaction}> &nbsp; 30 &nbsp;</p> */}
          </div>
        </div>
        <div className={styles.reactionBox}>
          <Icon_be_strong_hug
            className={styles.iconReaction}
            role='img'
            aria-label='icon smiley face with an heart'></Icon_be_strong_hug>
          <div>
            {/* <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p> */}
          </div>
        </div>
        <div className={styles.reactionBox}>
          <Icon_wow
            className={styles.iconReaction}
            role='img'
            aria-label='smiley surprised face'></Icon_wow>
          <div>
            {/* <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p> */}
          </div>
        </div>
        <div className={styles.reactionBox}>
          <Icon_good_writer_gold
            className={styles.iconReaction}
            role='img'
            aria-label='icon gold feather'></Icon_good_writer_gold>
          <div>
            {/* <p className={styles.numberReaction}> &nbsp; 10 &nbsp;</p> */}
          </div>
        </div>
        <div className={`${styles.reactionBox} ${styles.number}`}>
          <div>
            <p className={styles.numberReaction}>100k</p>
          </div>
          <FontAwesomeIcon
            icon={faCaretRight}
            className={styles.fontawesome}
            // style={{ color: 'blue' }}
          />
        </div>
      </div>
    </>
  );
};

export default StoryReactions;
