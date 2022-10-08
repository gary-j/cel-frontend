import React from 'react';
import styles from './StoryReactions.module.scss';
// import Icon_reaction_heart from '../../../public/assets/img/svgs/icon-reaction-heart.svg';
import Icon_be_strong_muscle from '../../../public/assets/img/svgs/reactions-icons/be-strong-muscle.svg';
import Icon_be_strong_hug from '../../../public/assets/img/svgs/reactions-icons/be-strong-hug.svg';
import Icon_like from '../../../public/assets/img/svgs/reactions-icons/like.svg';
import Icon_dislike from '../../../public/assets/img/svgs/reactions-icons/dislike.svg';
import Icon_good_writer_gold from '../../../public/assets/img/svgs/reactions-icons/good-writer-gold.svg';
import Icon_good_writer_grey from '../../../public/assets/img/svgs/reactions-icons/good-writer-grey.svg';
import Icon_me_too from '../../../public/assets/img/svgs/reactions-icons/me-too.svg';
import Icon_wow from '../../../public/assets/img/svgs/reactions-icons/wow.svg';
//
const StoryReactions = ({ storyID, cssBreakPoint }) => {
  // console.log(
  //   '*** props StoryReactions.js *** : ',
  //   storyID,
  //   ' et le breakpoint : ',
  //   cssBreakPoint
  // );
  return (
    <div
      className={`${styles.storyReaction} ${
        cssBreakPoint === 'desktop' ? styles.desktop : ''
      }`}>
      <div className={styles.reactionBox}>
        <Icon_be_strong_muscle
          className={styles.iconReaction}
          role='img'
          aria-label='strong arm with a heart'>
          {' '}
        </Icon_be_strong_muscle>
        {/* <div>
          <p className={styles.iconReaction} role='img' aria-label='thumb up'>
            👍
          </p>
        </div> */}
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_be_strong_hug className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        {/* <div>
          <p
            className={styles.iconReaction}
            role='img'
            aria-label='partying face'>
            {String.fromCodePoint(0x1f973)}
          </p>
        </div> */}
        <Icon_dislike className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 1 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox + ' ' + styles.selected}>
        <Icon_like className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 1.5k &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_me_too className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 30 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_wow className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_good_writer_grey className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 8 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_good_writer_gold className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 10 &nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default StoryReactions;
