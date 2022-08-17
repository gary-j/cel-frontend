import styles from '../Fieldset_Professionel.module.scss';

export function renderInputProInfos(professionalConsulted) {
  if (professionalConsulted.__isNew__) {
    return (
      <>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-title-select'>
            Titre
          </label>
          <div className={styles.proTitleBox}>
            <div className={styles.searchPro}>
              <input type='radio' id='doctor' name='title' value='Dr.' />
              <label HtmlFor='doctor'>&nbsp; Docteur (Dr.)</label>
            </div>
            <div className={styles.searchPro}>
              <input type='radio' id='professor' name='title' value='Pr.' />
              <label HtmlFor='professor'>&nbsp; Professeur (Pr.)</label>
            </div>
            <div className={styles.searchPro}>
              <input type='radio' id='maitre' name='title' value='Me.' />
              <label HtmlFor='maitre'>&nbsp; Maître (Me.)</label>
            </div>
            <div className={styles.searchPro}>
              <input type='radio' id='auditeur' name='title' value='Aud.' />
              <label HtmlFor='auditeur'>
                &nbsp; Auditeur de justice (Aud.)
              </label>
            </div>
            <div className={styles.searchPro}>
              <input type='radio' id='coach' name='title' value='Coach' />
              <label HtmlFor='coach'>&nbsp; Coach</label>
            </div>
            <div className={styles.searchPro}>
              <input type='radio' id='autre' name='title' value='autre' />
              <label HtmlFor='autre'>&nbsp; autre</label>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-city-select'>
            Ville
          </label>

          <div className={styles.searchPro}>
            <input
              className={styles.input}
              value={`${professionalConsulted.address.city}, ${
                professionalConsulted.address.zipcode
              } - ${professionalConsulted.address.country.toUpperCase()}`}
              readOnly
            />
          </div>
        </div>{' '}
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor='pro-domain-select'>
            Domaine
          </label>

          <div className={styles.searchPro}>
            <input
              className={styles.input}
              value={`${professionalConsulted.domain}`}
              readOnly
            />
          </div>
        </div>
      </>
    );
  }
}
