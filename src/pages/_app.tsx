import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { UserContextProvider } from '@/context/user-context';
import { AuthModalProvider } from '@/context/auth-modal-context';
import Layout from '@/components/layout/DefaultLayout';

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
  return (
    <UserContextProvider>
      <AuthModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthModalProvider>
    </UserContextProvider>
  );
}
export default MyApp;
