import React from 'react';
import styles from './RenderTransformationPart.module.scss';
//
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import {
  IMAGEKIT_URL_ENDPOINT,
  IMAGEKIT_AUTH_ENDPOINT,
  IMAGEKIT_PUBLIC_KEY,
} from '../../../../../../utils/consts.js';
//
const onError = (err) => {
  console.log('Error', err);
};
const onSuccess = (res) => {
  console.log('Succes', res);
};

function RenderTransformationPart(ressource, setRessource, bodyparts, user) {
  // console.log('user render transf part : ', user);
  //
  return (
    <div className={styles.part2}>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='bodyPart'>
          Partie du corps <span className={styles.asterisque}>*</span>
        </label>
        <select
          form='createStoryForm'
          name='bodyPart'
          id='bodyPart'
          defaultValue={'Gary'} // doit renvoyer l'Id de la partie du corps
          required
          className={styles.input}>
          {bodyparts.map((bodyPart) => {
            let i = bodyPart.name;
            return (
              <option key={bodyparts.slug}>
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='treatment'>
          Traitement / Opération / Programme{' '}
          <span className={styles.asterisque}>*</span>
        </label>
        <input
          form='createStoryForm'
          type='text'
          required
          placeholder='lifting...'
          className={styles.input}></input>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='photoAvant' className={styles.label}>
          Photo avant
        </label>
        <input
          type='file'
          accept='image/*, .pdf'
          id='photoAvant'
          name='beforeUrl'></input>
      </div>
      <IKContext
        urlEndpoint={IMAGEKIT_URL_ENDPOINT}
        publicKey={IMAGEKIT_PUBLIC_KEY}
        authenticationEndpoint={IMAGEKIT_AUTH_ENDPOINT}>
        <p>Upload an image</p>
        <IKUpload
          fileName={'test-upload-gary.png'}
          folder={`citron-en-limonade/transformation-physique`}
          responseFields='customMetadata'
          customMetadata={{ userId: `${user.id}` }}
          onError={onError}
          onSuccess={onSuccess}></IKUpload>
      </IKContext>
    </div>
  );
}

export default RenderTransformationPart;
