import { useState, useEffect, createContext, useCallback } from 'react';
import { publicRequest } from '../utils/axiosRequest';

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState(null);
  const [storedToken, setStoredToken] = useState(null);
  // const [user, setUser] = useState({
  //   authenticated: true,
  //   email: 'gary@test.com',
  //   id: '6290b6967236de92bed24f12',
  //   isAdmin: false,
  //   message: 'user logged in, valid token',
  //   username: 'Gary_J',
  // });

  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem('authToken');
  };
  //
  const authenticateUser = useCallback((userFromProvider) => {
    // si le user vient d'un provider comme Google ou Facebook
    // Nécessaire pour l'affichage du nom dans le Menu.js et Autres
    const theUser = userFromProvider;

    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      // console.log('* envoi du stored token au back-end * : ', storedToken);

      publicRequest
        .get(`/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that JWT is valid
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setStoredToken(storedToken);
          if (user?.isAdmin === true) {
            setIsAdmin(true);
          }
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setStoredToken(null);
        });
    } else if (theUser) {
      setIsLoggedIn(true);
      setIsLoading(false);
      setStoredToken(null);
      setUser(theUser);
    } else {
      // console.log('*** else, token not available *** : ');
      // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }, []);

  const logOutUser = () => {
    // To log out the user, remove the token
    removeToken();
    // and update the state variables
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  //
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        setIsLoading,
        isAdmin,
        user,
        storeToken,
        storedToken,
        authenticateUser,
        logOutUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
