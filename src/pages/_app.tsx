import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useAuthStateChange } from '@/hooks/useAuthStateChange';
import { useAuth } from '@/state/auth';

import Link from 'next/link';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  useAuthStateChange();
  const [user, _] = useAuth();
  const currentpath = useRouter().pathname;

  const isSelected = (pathname: string): boolean => currentpath === pathname;

  return (
    <div className='min-h-screen container mx-auto flex flex-col justify-center items-center'>
      <nav className='flex-grow-0 w-full h-20 flex justify-center items-center space-x-10'>
        <Link href='/'>
          <h1
            className='cursor-pointer'
            style={
              isSelected('/') ? { background: 'blue' } : { background: 'none' }
            }
          >
            Home
          </h1>
        </Link>
        {!user && (
          <Link href='/register'>
            <h1
              className='cursor-pointer'
              style={
                isSelected('/register')
                  ? { background: 'blue' }
                  : { background: 'none' }
              }
            >
              SignIn
            </h1>
          </Link>
        )}
        {user && (
          <Link href='/profile'>
            <h1
              className='cursor-pointer'
              style={
                isSelected('/profile')
                  ? { background: 'blue' }
                  : { background: 'none' }
              }
            >
              Profile
            </h1>
          </Link>
        )}
      </nav>
      <div className='flex-grow w-full flex justify-center items-center'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
