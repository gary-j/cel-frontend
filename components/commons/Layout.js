import Footer from './Footer';
import NavbarSmartphone from './NavbarSmartphone';
import { useContext } from 'react';
import { BreakPointContext } from '../../context/breakPoints.context';
import Menu from '../menu/Menu';
const Layout = ({ children }) => {
  const { breakPoint } = useContext(BreakPointContext);
  return (
    <>
      {breakPoint !== 'desktop' ? <NavbarSmartphone /> : <Menu></Menu>}

      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
