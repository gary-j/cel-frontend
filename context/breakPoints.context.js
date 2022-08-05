import { useState, useEffect, createContext } from 'react';
import breakPointObserver from '../components/shared/breakPointObserver';

const BreakPointContext = createContext();
const breakPoints = {
  mobile: '(max-width:659px)',
  tablet: '(min-width:660px) and (max-width:768px)',
  laptop: '(min-width:769px) and (max-width:1439px)',
  //large-laptop: '(min-width:1024px) and (max-width:1439px)',
  desktop: '(min-width:1440px)',
};

//
function BreakPointProviderWrapper(props) {
  const [breakPoint, setBreakPoint] = useState(undefined);
  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint);
  }, [breakPoint]);
  //
  return (
    <BreakPointContext.Provider value={{ breakPoint }}>
      {props.children}
    </BreakPointContext.Provider>
  );
}

export { BreakPointProviderWrapper, BreakPointContext };
