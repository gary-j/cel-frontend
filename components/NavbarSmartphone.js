import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
//
const NavbarSmartphone = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src='/logos/logo-green-flash-1-ligne.svg'
        alt=''
        width={230}
        height={40}
      />
      <Image
        className={styles.logo}
        src='/assets/img/navigation-icons-svg/icon-menu-burger@3x.png'
        alt=''
        width={32}
        height={32}
      />
      {/* <div className={styles.burgerMenu}> */}
      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='32'
        viewBox='0 0 20 20'>
        <g fill='none' fillRule='evenodd'>
          <g fill='#fff'>
            <g>
              <path
                d='M16.964 13.752c.296 0 .536.24.536.536 0 .271-.202.495-.463.53l-.073.006H3.036c-.296 0-.536-.24-.536-.536 0-.271.202-.495.463-.531l.073-.005h13.928zm0-4.286c.296 0 .536.24.536.536 0 .271-.202.495-.463.531l-.073.005H3.036c-.296 0-.536-.24-.536-.536 0-.271.202-.495.463-.53l.073-.006h13.928zm0-4.285c.296 0 .536.24.536.535 0 .272-.202.496-.463.531l-.073.005H3.036c-.296 0-.536-.24-.536-.536 0-.27.202-.495.463-.53l.073-.005h13.928z'
                transform='translate(0 -109) translate(0 109)'
              />
            </g>
          </g>
        </g>
      </svg> */}
      {/* </div> */}
    </nav>
  );
};

export default NavbarSmartphone;
