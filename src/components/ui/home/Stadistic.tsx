import Image from 'next/image';
import stadistic from '@/assets/stadistic.png';

const Stadistic = () => {
  return (
    <div
      className='w-full h-full  flex flex-row sm:flex-col justify-center sm:justify-between items-center  
    space-x-5 p-5 sm:pb-2 sm:space-y-0 sm:space-x-0'
    >
      <div className='self-start flex-grow h-24 flex flex-col justify-center items-start order-1 sm:order-2 sm:pt-4'>
        <h1 className='uppercase text-[#E76C4A] text-opacity-90 text-sm font-normal tracking-tighter leading-4'>
          seleccion de wod
        </h1>
        <h1 className='text-[#E76C4A] text-opacity-90 text-sm font-normal tracking-tighter leading-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
        </h1>
      </div>
      <div className='relative w-[90px] h-[90px] sm:w-[65px] sm:h-[65px] flex-shrink-0 order-2 sm:order-1 '>
        <Image
          src={stadistic}
          alt='stadistic picture'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Stadistic;
