import React from 'react';
import styles from './StoryReactions.module.scss';
import Icon_reaction_heart from '../../../public/assets/img/svgs/icon-reaction-heart.svg';
import Icon_reaction_party from '../../../public/assets/img/svgs/icon-reaction-party.svg';
import Icon_reaction_plume from '../../../public/assets/img/svgs/icon-reaction-plume.svg';
import Icon_reaction_smile from '../../../public/assets/img/svgs/icon-reaction-smile.svg';
import Icon_reaction_thumb from '../../../public/assets/img/svgs/icon-reaction-thumb.svg';
import Icon_plume_gary from '../../../public/assets/img/svgs/icon-plume-gary.svg';

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
        {/* <Icon_reaction_thumb className={styles.iconReaction} /> */}
        <div>
          <p className={styles.iconReaction} role='img' aria-label='thumb up'>
            👍
          </p>
        </div>
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <div>
          <p className={styles.iconReaction} role='img' aria-label='smily face'>
            😀
          </p>
        </div>
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <div>
          <p
            className={styles.iconReaction}
            role='img'
            aria-label='partying face'>
            {String.fromCodePoint(0x1f973)}
          </p>
        </div>
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox + ' ' + styles.selected}>
        <div>
          <p className={styles.iconReaction} role='img' aria-label='heart'>
            ❤️
          </p>
        </div>
        <div>
          <p className={styles.numberReaction}> &nbsp; 1.5k &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <div>
          <p
            className={styles.iconReaction + ' ' + styles.feather}
            role='img'
            aria-label='feather'>
            {/* 🖊️ */}
            {String.fromCodePoint(0x1fab6)}
            {/* {String.fromCharCode(0x1f58a)} */}
            {/* &#x1FAB6; */}
          </p>
        </div>
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default StoryReactions;
