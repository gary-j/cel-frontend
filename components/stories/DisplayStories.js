import React from 'react';
import styles from './DisplayStories.module.scss';
import { parseISO } from 'date-fns';
import { formatInTimeZone, utcToZonedTime, format } from 'date-fns-tz';
import { useState } from 'react';
import Image from 'next/image';
import ReactReadMoreReadLess from 'react-read-more-read-less';
//
import Icon_story_comments from '../../public/assets/img/svgs/icon-story-comments.svg';
import Icon_story_favorite from '../../public/assets/img/svgs/icon-story-favorite.svg';
import Icon_story_report from '../../public/assets/img/svgs/icon-story-report.svg';
import Icon_story_share from '../../public/assets/img/svgs/icon-story-share.svg';
import Icon_reaction_heart from '../../public/assets/img/svgs/icon-reaction-heart.svg';
import Icon_reaction_party from '../../public/assets/img/svgs/icon-reaction-party.svg';
import Icon_reaction_plume from '../../public/assets/img/svgs/icon-reaction-plume.svg';
import Icon_reaction_smile from '../../public/assets/img/svgs/icon-reaction-smile.svg';
import Icon_reaction_thumb from '../../public/assets/img/svgs/icon-reaction-thumb.svg';
import Icon_plume_gary from '../../public/assets/img/svgs/icon-plume-gary.svg';
import StoryReactions from './StoryReactions';

const DisplayStories = ({ stories }) => {
  // console.log('*** props de Display stories*** : ', stories);

  const [visible, setVisible] = useState(5);
  const showMoreStories = () => {
    setVisible((prevValue) => prevValue + 3);
    //
  };
  return (
    <>
      <section className={styles.storiesSection}>
        {stories.slice(0, visible).map((story) => {
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          return (
            <div key={story._id} className={styles.storyContainer}>
              <article className={styles.storyCard}>
                <h3 className={styles.theme}>{story.theme.name}</h3>
                <h4 className={styles.writter}>
                  Par{' '}
                  {story.isAnonym
                    ? story.writter.username[0] + '****'
                    : story.writter.username}
                  , le{' '}
                  {formatInTimeZone(story.createdAt, timeZone, 'dd/MM/yyyy')} à{' '}
                  {formatInTimeZone(story.createdAt, timeZone, "HH'h'mm")}
                </h4>
                <div className={styles.separation}></div>
                <h2 className={styles.title}>{story.title}</h2>
                <p className={styles.content}>
                  <ReactReadMoreReadLess
                    charLimit={166}
                    ellipsis={'...'}
                    readMoreText={' Lire la suite'}
                    readLessText={'Replier ▲'}
                    readMoreClassName={styles.readMore}
                    readLessClassName={styles.readMore}>
                    {story.content}
                  </ReactReadMoreReadLess>
                </p>
                <div className={styles.separation}></div>
                <p className={styles.professional}>
                  Professionnel:{' '}
                  <span className={styles.proName}>
                    {story.professionalConsulted.name}
                  </span>
                </p>
                <div className={styles.storyAction}>
                  <Icon_story_favorite className={styles.iconAction} />
                  <div className={styles.comments}>
                    <Icon_story_comments className={styles.iconAction} />
                    {story?.comments ? <p>{story.comments.length}</p> : null}
                  </div>
                  <Icon_story_share className={styles.iconAction} />
                  <Icon_story_report className={styles.iconAction} />
                </div>
              </article>
              <StoryReactions storyID={story._id} />
            </div>
          );
        })}
        <button className={styles.btnRose} onClick={showMoreStories}>
          Voir plus d'histoires
        </button>
      </section>
    </>
  );
};

export default DisplayStories;
