import Logo from '@/components/ui/Logo';
import Title from '@/components/ui/Title';

const NavBarMobile = () => {
  return (
    <div className='w-full h-14 flex justify-between items-center bg-[#262C34] px-3'>
      <div className='flex justify-center items-center space-x-2'>
        <Logo w={'w-8'} h={'h-8'} />
        <Title size={'text-2xl'} />
      </div>
      <button className='focus:outline-none' type='button'>
        <svg
          className='h-6 w-6 text-white transform scale-x-150'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
    </div>
  );
};

export default NavBarMobile;
