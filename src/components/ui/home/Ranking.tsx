import Image from 'next/image';
import ranking from '@/assets/ranking.png';

const Ranking = () => {
  return (
    <div
      className='w-full h-full  flex flex-row sm:flex-col justify-center sm:justify-between items-center 
    space-x-5 p-5 sm:pb-2 sm:space-y-4 sm:space-x-0'
    >
      <div className='relative w-[100px] h-[90px] sm:w-[80px] sm:h-[65px] flex-shrink-0'>
        <Image
          src={ranking}
          alt='crossfit picture'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className='self-start flex-grow h-24 flex flex-col justify-center items-start pt-7 sm:pt-0'>
        <h1 className='uppercase text-gray-300 text-sm font-normal tracking-tighter leading-4'>
          seleccion de wod
        </h1>
        <h1 className='text-gray-300 text-sm font-normal tracking-tighter leading-5'>
          Lorem ipsum dolor sit amet aa xs a b signal adipisicing elit. amet
        </h1>
      </div>
    </div>
  );
};

export default Ranking;
