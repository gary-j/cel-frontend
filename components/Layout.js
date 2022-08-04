import Footer from './Footer';
import NavbarSmartphone from './NavbarSmartphone';
import { useContext } from 'react';
import { BreakPointContext } from '../context/breakPoints.context';
import Menu from '../components/menu/Menu';
const Layout = ({ children }) => {
  const { breakPoint } = useContext(BreakPointContext);
  return (
    <>
      {breakPoint === 'mobile' || breakPoint === 'tablet' ? (
        <NavbarSmartphone />
      ) : (
        <Menu></Menu>
      )}

      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
