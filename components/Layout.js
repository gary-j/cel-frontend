import Footer from './Footer';
import NavbarSmartphone from './NavbarSmartphone';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSmartphone />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
