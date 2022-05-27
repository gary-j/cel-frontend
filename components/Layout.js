import Footer from './Footer';
import NavbarSmartphone from './NavbarSmartphone';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <NavbarSmartphone />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
