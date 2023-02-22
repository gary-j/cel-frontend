import { useState, useEffect, createContext, useCallback } from 'react';
import { publicRequest } from '../utils/axiosRequest';
import { useSession, signOut } from 'next-auth/react';

const AuthContext = createContext();

function AuthProviderWrapper(props) {
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
  const { data: session } = useSession();

  //
  const authenticateUser = useCallback(() => {
    // console.log('*** AuthContext - authenticateUser ***');

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
          // console.log(
          //   '*** Reponse de /auth/verify, authenticateUser() *** : ',
          //   response
          // );

          // If the server verifies that JWT is valid
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setStoredToken(storedToken);
          console.log('user de reponse.data : ', user);
          if (user?.isAdmin === true) {
            setIsAdmin(true);
          }
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // console.log('*** catch error authenticated *** : ', error);
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setStoredToken(null);
        });
    } else if (session?.jwt) {
      localStorage.removeItem('authToken');
      setIsLoggedIn(true);
      setIsLoading(false);
      setUser(session.user);
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
