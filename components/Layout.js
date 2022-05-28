import Footer from './Footer';
import NavbarSmartphone from './NavbarSmartphone';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSmartphone />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
