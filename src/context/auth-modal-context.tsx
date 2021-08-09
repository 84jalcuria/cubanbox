import { useState, createContext, useContext } from 'react';

const AuthModalContext = createContext(null);

export const AuthModalProvider = (props) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const value = {
    showSignUpModal,
    showSignInModal,
    setShowSignInModal,
    setShowSignUpModal,
  };

  return <AuthModalContext.Provider value={value} {...props} />;
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context)
    throw new Error('useSignUpModal must be used within a AuthModalProvider');
  return context;
};
