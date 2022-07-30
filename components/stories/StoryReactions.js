import React from 'react';
import styles from './StoryReactions.module.scss';
import Icon_reaction_heart from '../../public/assets/img/svgs/icon-reaction-heart.svg';
import Icon_reaction_party from '../../public/assets/img/svgs/icon-reaction-party.svg';
import Icon_reaction_plume from '../../public/assets/img/svgs/icon-reaction-plume.svg';
import Icon_reaction_smile from '../../public/assets/img/svgs/icon-reaction-smile.svg';
import Icon_reaction_thumb from '../../public/assets/img/svgs/icon-reaction-thumb.svg';
import Icon_plume_gary from '../../public/assets/img/svgs/icon-plume-gary.svg';

const StoryReactions = ({ storyID }) => {
  //   console.log('*** PROPS StoryReaction, storyID :', storyID);
  return (
    <div className={styles.storyReaction}>
      {/* <Icon_reaction_plume /> */}
      <div className={styles.reactionBox}>
        <Icon_reaction_thumb className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_reaction_smile className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_reaction_party className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox + ' ' + styles.selected}>
        <Icon_reaction_heart className={styles.iconReaction} />
        <div>
          <p className={styles.numberReaction}> &nbsp; 1.5k &nbsp;</p>
        </div>
      </div>
      <div className={styles.reactionBox}>
        <Icon_plume_gary className={styles.iconReaction} />
        {/* {' '}
  <Image
    src={`/assets/img/pngs/icon-r-action-20-plume@3x.png`}
    alt=''
    width={27}
    height={27}
  /> */}
        <div>
          <p className={styles.numberReaction}> &nbsp; 22 &nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default StoryReactions;
