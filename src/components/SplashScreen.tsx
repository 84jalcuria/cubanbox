import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';

const SplashScreen = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return !loading ? (
    children
  ) : (
    <div className='bg-green-800 w-full h-screen flex justify-center items-center '>
      <Logo />
    </div>
  );
};

export default SplashScreen;
