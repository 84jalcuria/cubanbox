import Image from 'next/image';
import crossfit from '@/assets/crossfit.png';

const Crossfit = () => {
  return (
    <div
      className='w-full h-full  flex flex-row sm:flex-col justify-center sm:justify-between items-center 
    space-x-5 p-5 sm:pb-2 sm:space-y-4 sm:space-x-0'
    >
      <div className='relative w-[90px] h-[90px] sm:w-[65px] sm:h-[65px] flex-shrink-0'>
        <Image
          src={crossfit}
          alt='crossfit picture'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='self-start flex-grow h-24 flex flex-col justify-center items-start pt-7 sm:pt-0'>
        <h1 className='uppercase text-gray-900 text-sm font-normal tracking-tighter leading-4'>
          seleccion de wod
        </h1>
        <h1 className='text-gray-900 text-sm font-normal tracking-tighter leading-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
        </h1>
      </div>
    </div>
  );
};

export default Crossfit;
