import React, { useRef, useState } from 'react';
import styles from './renderTransformationPart.module.scss';
//
import Select from 'react-select';
import { DropDownSelectStyles } from '../../../../../shared/reactSelectCustomStyles';
//
import Icon_upload from '../../../../../../public/assets/img/svgs/page-icons/icon-page-upload.svg';
import Icon_optinOn from '../../../../../../public/assets/img/svgs/page-icons/icon-page-optin-on.svg';
import Icon_optinOff from '../../../../../../public/assets/img/svgs/page-icons/icon-page-optin-off.svg';
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

    bodyparts,
    user,
    inputRefIK_Before,
    inputRefIK_After,
    ikUploadRef,
    isSatisfied,
    setIsSatisfied,
  } = newProps;
  //
  //
  const handleTransformation = (e) => {
    switch (e.target.name) {
      case 'bodyPart':
        setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            bodyPart: e.target.value,
          },
        });
        break;
      case 'treatment':
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
    // setRessource({
    //   ...ressource,
    //   ['beforePictureName']: res.name,
    //   beforePictureUrl: res.url,
    // });
    story.ressourceToCreate.complete
      ? setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            beforePictureUrl: res.url,
            beforePictureName: res.name,
          },

          ressourceToCreate: {
            ...story.ressourceToCreate,
            physicalTransformation: {
              ...story.ressourceToCreate.physicalTransformation,
              ['beforePictureUrl']: res.url,
              ['beforePictureName']: res.name,
            },
          },
        })
      : setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            beforePictureUrl: res.url,
            beforePictureName: res.name,
          },
        });
  };
  //
  const onSuccessAfter = (res) => {
    // console.log('SuccesAfter', res);
    // setRessource({
    //   ...ressource,
    //   ['afterPictureName']: res.name,
    //   afterPictureUrl: res.url,
    // });

    story.ressourceToCreate.complete
      ? setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            afterPictureUrl: res.url,
            afterPictureName: res.name,
          },

          ressourceToCreate: {
            ...story.ressourceToCreate,
            physicalTransformation: {
              ...story.ressourceToCreate.physicalTransformation,
              ['afterPictureUrl']: res.url,
              ['afterPictureName']: res.name,
            },
          },
        })
      : setStory({
          ...story,
          physicalTransformation: {
            ...story.physicalTransformation,
            afterPictureUrl: res.url,
            afterPictureName: res.name,
          },
        });
  };
  //
  //
  const handleIsSatisfied = (e) => {
    let value = e.target.closest('div').dataset.target;
    console.log('value : ', value);
    let boolean = value === 'true';
    console.log('boolean : ', boolean);
    setIsSatisfied(boolean);
    setStory({
      ...story,
      physicalTransformation: {
        ...story.physicalTransformation,
        isSatisfied: boolean,
      },
    });
  };
  return (
    <div className={styles.part2}>
      <div className={`${styles.inputBox} ${styles.first}`}>
        <label className={styles.label} htmlFor='bodyPart'>
          Partie du corps <span className={styles.asterisque}>&nbsp;*</span>
        </label>
        {/* <select
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
        </select> */}
        <Select
          id='bodyPart'
          instanceId='bodyPart-select'
          name='bodyPart'
          form='createStoryForm'
          styles={DropDownSelectStyles}
          className={'BodyPartSelectContainer'} // added to globals.scss
          placeholder={bodyparts[0]}
          defaultValue={bodyparts[0]}
          options={bodyparts}
          onChange={(e) => handleTransformation(e)}></Select>
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
          name='beforePictureUrl'></input> */}
        <IKContext
          urlEndpoint={IMAGEKIT_URL_ENDPOINT}
          publicKey={IMAGEKIT_PUBLIC_KEY}
          authenticationEndpoint={IMAGEKIT_AUTH_ENDPOINT}>
          {/* <p>Upload an image</p> */}
          <IKUpload
            id='photoAvant'
            name='beforePictureUrl'
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
                  {story.physicalTransformation?.beforePictureName
                    ? story.physicalTransformation.beforePictureName
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
          name='beforePictureUrl'></input> */}
        <IKContext
          urlEndpoint={IMAGEKIT_URL_ENDPOINT}
          publicKey={IMAGEKIT_PUBLIC_KEY}
          authenticationEndpoint={IMAGEKIT_AUTH_ENDPOINT}>
          {/* <p>Upload an image</p> */}
          <IKUpload
            id='photoApres'
            name='afterPictureUrl'
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
                  {story.physicalTransformation?.afterPictureName
                    ? story.physicalTransformation.afterPictureName
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
        <div className={styles.isSatisfied}>
          {isSatisfied ? (
            <div className={styles.block}>
              <div className={styles.boolean} data-target='true'>
                <Icon_optinOn
                  role='checkbox'
                  tabIndex='0'
                  className={styles.icon}
                  onClick={handleIsSatisfied}
                />
                <p className={styles.selected} onClick={handleIsSatisfied}>
                  OUI
                </p>
              </div>
              <div className={styles.boolean} data-target='false'>
                <Icon_optinOff
                  className={styles.icon}
                  role='checkbox'
                  tabIndex='0'
                  onClick={handleIsSatisfied}
                />
                <p onClick={handleIsSatisfied}>NON</p>
              </div>
            </div>
          ) : (
            <div className={styles.block}>
              <div className={styles.boolean} data-target='true'>
                <Icon_optinOff
                  role='checkbox'
                  // aria-checked
                  tabIndex='0'
                  className={styles.icon}
                  onClick={handleIsSatisfied}
                />
                <p onClick={handleIsSatisfied}>OUI</p>
              </div>
              <div className={styles.boolean} data-target='false'>
                <Icon_optinOn
                  role='checkbox'
                  tabIndex='0'
                  className={styles.icon}
                  onClick={handleIsSatisfied}
                />
                <p className={styles.selected} onClick={handleIsSatisfied}>
                  NON
                </p>
              </div>
            </div>
          )}
        </div>
        {/* <input type='checkbox'></input> */}
      </div>
    </div>
  );
}

export default renderTransformationPart;
