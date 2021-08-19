import { useRouter } from 'next/router';
import { useUser } from '@/context/user-context';
import Button from '@/components/ui/navbar/ButtonNavBarDesktop';
import { toggleSignInDialog, toggleSignUpDialog } from '@/state/dialog';

const NavBarDesktop = () => {
  const router = useRouter();
  const { user, signOut } = useUser();
  return (
    <div className='flex justify-center items-center space-x-5 '>
      {!user ? (
        <Button caption={'inicio'} fontsize={'text-base'} selected={true} />
      ) : (
        <Button caption={'acerca de'} fontsize={'text-base'} />
      )}

      <Button caption={'contactos'} fontsize={'text-base'} />
      {!user ? (
        <button type='button' onClick={() => toggleSignInDialog(true)}>
          <Button caption={'iniciar box'} fontsize={'text-base'} />
        </button>
      ) : (
        <>
          <button
            type='button'
            onClick={() => {
              toggleSignUpDialog(false);
              signOut();
            }}
          >
            <Button caption={'abandonar'} fontsize={'text-base'} />
          </button>
          <button type='button' onClick={() => router.replace('/box')}>
            <Button caption={'box'} fontsize={'text-base'} selected={true} />
          </button>
        </>
      )}
    </div>
  );
};

export default NavBarDesktop;
