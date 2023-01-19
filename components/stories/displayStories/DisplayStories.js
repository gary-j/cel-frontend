import React from 'react';
import styles from './DisplayStories.module.scss';
import Image from 'next/image';
// import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { useState } from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
//
import Icon_story_comments from '../../../public/assets/img/svgs/story-actions-icons/icon-story-comments.svg';
import Icon_story_favorite from '../../../public/assets/img/svgs/story-actions-icons/icon-story-favorite.svg';
import Icon_story_report from '../../../public/assets/img/svgs/story-actions-icons/icon-story-report.svg';
import Icon_story_share from '../../../public/assets/img/svgs/story-actions-icons/icon-story-share.svg';
import Icon_camera_trans from '../../../public/assets/img/svgs/page-icons/icon-page-transformation-physique.svg';
import StoryReactions from './StoryReactions';
//
//
const DisplayStories = ({ stories, cssBreakPoint }) => {
  // console.log(
  //   '*** props de DisplayStories.js *** : ',
  //   stories,
  //   ' et le breakpoint : ',
  //   cssBreakPoint
  // );
  const [visible, setVisible] = useState(5);
  const showMoreStories = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  //
  return (
    <>
      <section
        className={
          styles.storiesSection +
          ' ' +
          `${cssBreakPoint === 'desktop' ? styles.desktop : ''}`
        }>
        {stories.slice(0, visible).map((story) => {
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          // ajout d'une clé à l'objet story pour une variante d'affichage css
          story.proIsAlone =
            !story.ressource &&
            story.physicalTransformation.isSelected === false;

          return (
            <div key={story._id} className={styles.storyContainer}>
              <article className={styles.storyCard}>
                <div className={styles.header}>
                  <h3 className={styles.theme}>{story.theme.name}</h3>
                  <h4 className={styles.writter}>
                    Par{' '}
                    {story.isAnonym
                      ? story.writter.username[0] + '****'
                      : story.writter.username}
                    , {cssBreakPoint === 'desktop' && <br></br>}le{' '}
                    {formatInTimeZone(story.createdAt, timeZone, 'dd/MM/yyyy')}{' '}
                    à {formatInTimeZone(story.createdAt, timeZone, "HH'h'mm")}
                  </h4>
                </div>
                <div className={styles.separation}></div>
                <h2 className={styles.title}>{story.title}</h2>
                <p className={styles.content}>
                  <ReactReadMoreReadLess
                    charLimit={cssBreakPoint === 'desktop' ? 145 : 166}
                    ellipsis={'...'}
                    readMoreText={' Lire la suite'}
                    readLessText={'Replier ▲'}
                    readMoreClassName={styles.readMore}
                    readLessClassName={styles.readMore}>
                    {story.content}
                  </ReactReadMoreReadLess>
                </p>
                <div className={styles.separation2}></div>
                <div className={styles.about}>
                  <div
                    className={`${styles.block} ${
                      story.proIsAlone ? styles.alone : ''
                    }`}>
                    <div
                      className={`${styles.pro} ${styles.part} ${
                        story.proIsAlone ? styles.alone : ''
                      }`}>
                      <div>
                        {story.proIsAlone ? (
                          <p className={styles.professional}>
                            Professionnel :&nbsp;
                          </p>
                        ) : (
                          <p className={styles.professional}>Professionnel </p>
                        )}
                      </div>
                      <div className={styles.proNameBlock}>
                        <p className={styles.proName}>
                          {story.professionalConsulted?.name}
                        </p>
                      </div>
                    </div>
                    {story.ressource && (
                      <div className={styles.ressource + ' ' + styles.part}>
                        <div>
                          <p className={styles.text}>Ressource </p>
                        </div>
                        <div>
                          <Image
                            className={styles.image}
                            src={`/assets/img/svgs/ressources-icons/${story.ressource?.mediaType}.svg`}
                            alt={`icon ${story.ressource?.mediaType}`}
                            height='40px'
                            width='40px'></Image>
                        </div>
                      </div>
                    )}

                    {story.physicalTransformation.isSelected && (
                      <div
                        className={styles.transformation + ' ' + styles.part}>
                        <div>
                          <p className={styles.text}>Avant/Après </p>
                        </div>
                        <div>
                          <Icon_camera_trans
                            className={styles.image}
                            alt={`icon before then after`}
                            height='36px'
                            width='36px'
                            fill='#F95D5F'></Icon_camera_trans>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.separation2}></div>

                <div className={styles.footer}>
                  <div className={styles.storyAction}>
                    <Icon_story_favorite
                      className={styles.iconAction + ' ' + styles.etoile}
                    />
                    <div className={styles.comments}>
                      <Icon_story_comments className={styles.iconAction} />
                      {story?.comments ? <p>{story.comments.length}</p> : null}
                    </div>
                    <Icon_story_share className={styles.iconAction} />
                    <Icon_story_report className={styles.iconAction} />
                  </div>
                </div>
              </article>
              <StoryReactions
                storyID={story._id}
                cssBreakPoint={cssBreakPoint}
              />
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
