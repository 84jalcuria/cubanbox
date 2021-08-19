import Title from '@/components/ui/Title';
import ButtonNavBarMobile from '@/components/ui/navbar/ButtonNavBarMobile';
import about from '@/assets/menu/about.png';
import contact from '@/assets/menu/contact.png';
import crossfit from '@/assets/menu/crossfit.png';
import home from '@/assets/menu/home.png';
import initsession from '@/assets/menu/init-session.png';
import closesession from '@/assets/menu/close-session.png';
import profile from '@/assets/button/signup.png';

import { useUser } from '@/context/user-context';
import { toggleSignInDialog } from '@/state/dialog';

interface sideBarProps {
  onClose: () => void;
}

const SideBar = ({ onClose }: sideBarProps) => {
  const { user, signOut } = useUser();
  return (
    <div className='w-full h-full bg-[#262C34] flex flex-col justify-between items-center'>
      <button
        type='button'
        onClick={onClose}
        className='focus:outline-none self-end mt-4 mr-4'
      >
        <svg
          className='max-h-7 w-7 text-[#E76C4A]'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <section className='flex-grow w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-start'>
          {!user ? (
            <ButtonNavBarMobile
              caption={'inicio'}
              fontsize={'text-base'}
              src={home}
              onClose={onClose}
              selected={true}
            />
          ) : (
            <ButtonNavBarMobile
              caption={'box'}
              fontsize={'text-base'}
              src={profile}
              onClose={onClose}
              selected={true}
            />
          )}

          <ButtonNavBarMobile
            caption={'wod diario'}
            fontsize={'text-base'}
            src={crossfit}
            onClose={onClose}
          />
          <ButtonNavBarMobile
            caption={'contactanos'}
            fontsize={'text-base'}
            src={contact}
            onClose={onClose}
          />
          <ButtonNavBarMobile
            caption={'acerca de'}
            fontsize={'text-base'}
            src={about}
            onClose={onClose}
          />
          {user ? (
            <ButtonNavBarMobile
              caption={'abandonar'}
              fontsize={'text-base'}
              src={closesession}
              onClose={() => {
                signOut();
                onClose();
              }}
            />
          ) : (
            <ButtonNavBarMobile
              caption={'iniciar box'}
              fontsize={'text-base'}
              src={initsession}
              onClose={() => {
                onClose();
                toggleSignInDialog(true);
              }}
            />
          )}
        </div>
      </section>
      <div className='self-end mb-8 mr-4'>
        <Title size={'text-5xl'} />
      </div>
    </div>
  );
};

export default SideBar;
