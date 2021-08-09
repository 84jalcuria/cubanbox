import { useUser } from '@/context/user-context';
import Button from '@/components/ui/navbar/ButtonNavBarDesktop';
import { useAuthModal } from '@/context/auth-modal-context';

const NavBarDesktop = () => {
  const { user } = useUser();
  const { setShowSignInModal } = useAuthModal();
  return (
    <div className='flex justify-center items-center space-x-5 '>
      <Button caption={'inicio'} fontsize={'text-base'} />
      <Button caption={'contactos'} fontsize={'text-base'} />
      {!user ? (
        <button type='button' onClick={() => setShowSignInModal(true)}>
          <Button caption={'iniciar sesion'} fontsize={'text-base'} />
        </button>
      ) : (
        <Button caption={'cerrar sesion'} fontsize={'text-base'} />
      )}
    </div>
  );
};

export default NavBarDesktop;
