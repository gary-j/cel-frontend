import React, { useRef } from 'react';
import styles from './renderTransformationPart.module.scss';
//
import Icon_upload from '../../../../../../public/assets/img/svgs/page-icons/icon-page-upload.svg';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import {
  IMAGEKIT_URL_ENDPOINT,
  IMAGEKIT_AUTH_ENDPOINT,
  IMAGEKIT_PUBLIC_KEY,
} from '../../../../../../utils/consts.js';

function renderTransformationPart(newProps) {
  //
  const {
    story,
    setStory,
    ressource,
    setRessource,
    bodyparts,
    user,
    inputRefIK_Before,
    inputRefIK_After,
    ikUploadRef,
  } = newProps;
  //
  //
  const handleTransformation = (e) => {
    switch (e.target.name) {
      case 'bodyPart':
        setRessource({
          ...ressource,
          physicalTransformation: {
            ...ressource.physicalTransformation,
            bodyPart: e.target.value,
            bodyPartName:
              e.target.options[e.target.selectedIndex].dataset.bodypart,
          },
        });
        setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            bodyPart: e.target.value,
          },
        });
        break;
      case 'treatment':
        setRessource({
          ...ressource,
          physicalTransformation: {
            ...ressource.physicalTransformation,
            treatment: e.target.value,
          },
        });
        setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            treatment: e.target.value,
          },
        });
        break;
    }
  };
  //
  const onError = (err) => {
    console.log('Error', err);
  };
  //
  const onSuccessBefore = (res) => {
    // console.log('SuccesBefore', res);
    setRessource({
      ...ressource,
      ['beforePhotoName']: res.name,
      beforeUrl: res.url,
    });
    setStory({
      ...story,
      physicalTransformation: {
        ...story.physicalTransformation,
        beforePictureUrl: res.url,
      },
    });
  };
  //
  const onSuccessAfter = (res) => {
    // console.log('SuccesAfter', res);
    setRessource({
      ...ressource,
      ['afterPhotoName']: res.name,
      afterUrl: res.url,
    });
    setStory({
      ...story,
      physicalTransformation: {
        ...story.physicalTransformation,
        afterPictureUrl: res.url,
      },
    });
  };

  //
  return (
    <div className={styles.part2}>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='bodyPart'>
          Partie du corps <span className={styles.asterisque}>&nbsp;*</span>
        </label>
        <select
          form='createStoryForm'
          name='bodyPart'
          id='bodyPart'
          // defaultValue={''}
          // doit renvoyer l'Id de la partie du corps
          required
          className={styles.input}
          onChange={(e) => handleTransformation(e)}>
          {bodyparts.map((bodyPart) => {
            let i = bodyPart.name;
            return (
              <option
                key={bodyPart.slug}
                value={bodyPart._id}
                title={bodyPart.name}
                data-bodypart={bodyPart.slug}>
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='treatment'>
          Traitement / Opération / Programme{' '}
          <span className={styles.asterisque}>&nbsp;*</span>
        </label>
        <input
          form='createStoryForm'
          type='text'
          name='treatment'
          required
          placeholder='lifting...'
          className={styles.input}
          onChange={(e) => handleTransformation(e)}></input>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='photoAvant' className={styles.label}>
          Photo avant
        </label>
        {/* <input
          type='file'
          accept='image/*, .pdf'
          id='photoAvant'
          name='beforeUrl'></input> */}
        <IKContext
          urlEndpoint={IMAGEKIT_URL_ENDPOINT}
          publicKey={IMAGEKIT_PUBLIC_KEY}
          authenticationEndpoint={IMAGEKIT_AUTH_ENDPOINT}>
          {/* <p>Upload an image</p> */}
          <IKUpload
            id='photoAvant'
            name='beforeUrl'
            // fileName={`${user.id}/before`}
            folder={`citron-en-limonade/transformation-physique`}
            responseFields='customMetadata'
            // customMetadata={{ userId: `${user?.id}`, photo: 'before' }}
            validateFile={(file) => file.size < 5000000}
            // useUniqueFileName={true}
            inputRef={inputRefIK_Before}
            ref={ikUploadRef}
            style={{ display: 'none' }} // hide the default input and use the custom upload button
            onError={onError}
            onSuccess={onSuccessBefore}></IKUpload>
          {inputRefIK_Before && (
            <div
              className={`${styles.customInput} ${styles.photo}`}
              onClick={() => inputRefIK_Before.current.click()}>
              <div className={styles.div}>
                <p className={styles.placeholder}>
                  {ressource?.beforePhotoName
                    ? ressource.beforePhotoName
                    : 'Ajouter un fichier...'}
                </p>
              </div>
              <div className={styles.div}>
                <Icon_upload className={styles.icon} />
              </div>
            </div>
          )}
          {/* <p>Abort upload request</p>
          {ikUploadRef && (
            <button onClick={() => ikUploadRef.current.abort()}>Annuler</button>
          )} */}
        </IKContext>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor='photoAvant' className={styles.label}>
          Photo après
        </label>
        {/* <input
          type='file'
          accept='image/*, .pdf'
          id='photoAvant'
          name='beforeUrl'></input> */}
        <IKContext
          urlEndpoint={IMAGEKIT_URL_ENDPOINT}
          publicKey={IMAGEKIT_PUBLIC_KEY}
          authenticationEndpoint={IMAGEKIT_AUTH_ENDPOINT}>
          {/* <p>Upload an image</p> */}
          <IKUpload
            id='photoApres'
            name='AfterUrl'
            // fileName={'test-upload-gary.png'}
            folder={`citron-en-limonade/transformation-physique`}
            responseFields='customMetadata'
            // customMetadata={{ userId: `${user.id}`, photo: 'after' }}
            validateFile={(file) => file.size < 5000000}
            useUniqueFileName={true}
            inputRef={inputRefIK_After}
            ref={ikUploadRef}
            onError={onError}
            onSuccess={onSuccessAfter}
            style={{ display: 'none' }} // hide the default input and use the custom upload button
          ></IKUpload>
          {inputRefIK_After && (
            <div
              className={`${styles.customInput} ${styles.photo}`}
              onClick={() => inputRefIK_After.current.click()}>
              <div className={styles.div}>
                <p className={styles.placeholder}>
                  {ressource?.afterPhotoName
                    ? ressource.afterPhotoName
                    : 'Ajouter un fichier...'}
                </p>
              </div>
              <div className={styles.div}>
                <Icon_upload className={styles.icon} />
              </div>
            </div>
          )}
          {/* <p>Abort upload request</p>
          {ikUploadRef && (
            <button onClick={() => ikUploadRef.current.abort()}>Annuler</button>
          )} */}
        </IKContext>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='isSatified' className={styles.label}>
          {' '}
          Êtes-vous satistait(e) ?
        </label>
        <input type='checkbox'></input>
      </div>
    </div>
  );
}

export default renderTransformationPart;
