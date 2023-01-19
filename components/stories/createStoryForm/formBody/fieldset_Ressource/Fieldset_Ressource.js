import React, { useState, useLayoutEffect, useContext, useRef } from 'react';
import styles from './Fieldset_Ressource.module.scss';
var slugify = require('slugify');
import { renderInputsRessource } from './renderInputsRessource';
import renderTransformationPart from './transformation/renderTransformationPart';
import { publicRequest } from '../../../../../utils/axiosRequest';
import { AuthContext } from '../../../../../context/auth.context';
import Icon_checkboxOn from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-on.svg';
import Icon_checkboxOff from '../../../../../public/assets/img/svgs/page-icons/icon-page-checkbox-off.svg';
//
function Fieldset_Ressource({ user, story, setStory }) {
  const data = [
    'citation',
    'film',
    'influenceur',
    'livre',
    'musique',
    'podcast',
    'série',
    'vidéo',
  ];
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { storedToken } = useContext(AuthContext);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    setStory({
      ...story,
      physicalTransformation: {
        ...story.physicalTransformation,
        isSelected: !isChecked,
      },
    });
  };

  const handleSelect = (e) => {
    let id = e.target.closest('div').dataset.target;
    // console.log('*** appui sur : ', id);
    if (selected === id) {
      setSelected(null);
      setStory({ ...story, ressourceToCreate: {} });
    } else {
      setSelected(id);
      setStory({
        ...story,
        ressourceToCreate: {
          ...story.ressourceToCreate,
          theme: story.theme,
          mediaType: slugify(id, { lower: true }),
          complete: { [slugify(id, { lower: true })]: {} },
        },
      });
    }
  };
  //
  const [bodyparts, setBodyPartsFromDB] = useState([]);
  const inputRefIK_Before = useRef(null);
  const inputRefIK_After = useRef(null);
  const ikUploadRef = useRef(null);
  const [isSatisfied, setIsSatisfied] = useState(true);

  //
  let newProps = {
    story,
    setStory,
    bodyparts: bodyparts,
    user: user,
    inputRefIK_Before: inputRefIK_Before,
    inputRefIK_After: inputRefIK_After,
    ikUploadRef: ikUploadRef,
    isSatisfied: isSatisfied,
    setIsSatisfied: setIsSatisfied,
  };
  //Fetch bodyparts from DB
  useLayoutEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    //
    async function getBodyPartsFromDB() {
      try {
        const res = await publicRequest.get('/bodypart', {
          // connect the controller with the axios request
          signal: signal,
        });
        const bodyparts = await res.data;
        //
        const tempArray = [];
        await bodyparts.forEach((element) => {
          tempArray.push({
            label: element.name,
            value: element._id,
            target: { name: 'bodyPart', value: element._id },
            ...element,
          });
        });
        setBodyPartsFromDB(tempArray);
        controller = null;
        //aborts the request when the component umounts
        return () => controller?.abort();
      } catch (error) {
        if (error.name === 'AbortError') {
          return 'Request Aborted ';
        }
        return error;
      }
    }
    getBodyPartsFromDB();
  }, []);
  //
  // useEffect(() => {
  //   const imagekitAuth = publicRequest.get('/auth/imagekit', {
  //     headers: { Authorization: `Bearer ${storedToken}` },
  //   });
  //   console.log('la reponse du backend imagekit auth : ', imagekitAuth);
  // }, []);
  //
  //
  return (
    <fieldset
      className={styles.fieldset}
      form='createStoryForm'
      name='Ressources'>
      <div className={styles.part1}>
        <div className={styles.fieldsetHeader}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>
              Ressources <span className={styles.facultatif}>(facultatif)</span>
            </h3>
          </div>
          <div className={styles.separation}></div>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='ressource-select'>
            Recommander une ressource liée à votre histoire
          </label>
        </div>
        <div className={styles.selectRessource}>
          {data.map((ressource, i) => {
            return (
              <div
                key={ressource}
                data-target={ressource}
                className={` 
                ${styles.button} ${
                  selected === ressource ? styles.selected : ''
                } 
              `}
                onClick={handleSelect}>
                <p data-target={ressource} className={styles.text}>
                  {ressource.charAt(0).toUpperCase() + ressource.slice(1)}
                </p>
              </div>
            );
          })}
        </div>
        {selected !== null && renderInputsRessource(selected, story, setStory)}
      </div>

      <div className={styles.transformation}>
        <div className={styles.inputBox}>
          <input
            className={styles.hidden}
            type='checkbox'
            id='transformation'
            // checked={isChecked}
            // onChange={handleCheckbox}
          ></input>
          {isChecked ? (
            <Icon_checkboxOn
              className={styles.checkbox}
              onClick={handleCheckbox}
            />
          ) : (
            <Icon_checkboxOff
              className={styles.checkbox}
              onClick={handleCheckbox}
            />
          )}
          <label className={styles.label2} htmlFor='transformation'>
            Transformation physique <br></br>Chirurgie&nbsp;esthétique
          </label>
        </div>
        {isChecked && renderTransformationPart(newProps)}
      </div>
    </fieldset>
  );
}

export default Fieldset_Ressource;
