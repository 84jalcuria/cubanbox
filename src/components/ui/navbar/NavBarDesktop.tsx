import { useUser } from '@/context/user-context';

import Button from '@/components/ui/navbar/ButtonNavBarDesktop';

const NavBarDesktop = () => {
  const { user } = useUser();
  return (
    <div className='flex justify-center items-center space-x-5 '>
      <Button caption={'inicio'} fontsize={'text-base'} />
      <Button caption={'contactos'} fontsize={'text-base'} />
      {!user ? (
        <Button caption={'iniciar sesion'} fontsize={'text-base'} />
      ) : (
        <Button caption={'cerrar sesion'} fontsize={'text-base'} />
      )}
    </div>
  );
};

export default NavBarDesktop;
