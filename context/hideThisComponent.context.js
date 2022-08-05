import { useState, createContext } from 'react';

const HideThisComponentContext = createContext();

function HideThisComponentProviderWrapper(props) {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <HideThisComponentContext.Provider value={{ isHidden, setIsHidden }}>
      {props.children}
    </HideThisComponentContext.Provider>
  );
}

export { HideThisComponentProviderWrapper, HideThisComponentContext };
