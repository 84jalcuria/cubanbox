import { useRouter } from 'next/router';
import { useUser } from '@/context/user-context';
import Button from '@/components/ui/navbar/ButtonNavBarDesktop';
import { useAuthModal } from '@/context/auth-modal-context';

const NavBarDesktop = () => {
  const router = useRouter();
  const { user, signOut } = useUser();
  const { setShowSignInModal } = useAuthModal();
  return (
    <div className='flex justify-center items-center space-x-5 '>
      {!user ? (
        <Button caption={'inicio'} fontsize={'text-base'} selected={true} />
      ) : (
        <Button caption={'acerca de'} fontsize={'text-base'} />
      )}

      <Button caption={'contactos'} fontsize={'text-base'} />
      {!user ? (
        <button type='button' onClick={() => setShowSignInModal(true)}>
          <Button caption={'iniciar sesion'} fontsize={'text-base'} />
        </button>
      ) : (
        <>
          <button type='button' onClick={() => signOut()}>
            <Button caption={'cerrar sesion'} fontsize={'text-base'} />
          </button>
          <button type='button' onClick={() => router.replace('/profile')}>
            <Button
              caption={'profile'}
              fontsize={'text-base'}
              selected={true}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default NavBarDesktop;
