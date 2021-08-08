import Image from 'next/image';
import hero from '@/assets/hero.jpg';
import strongman from '@/assets/strongman.png';
import Crossfit from '@/components/ui/home/Crossfit';
import Stadistic from '@/components/ui/home/Stadistic';
import Ranking from '@/components/ui/home/Ranking';
import ButtonBeginDesktop from '@/components/ui/home/ButtonBeginDesktop';
import ButtonBeginMobile from '@/components/ui/home/ButtonBeginMobile';
import ButtonRegisterMobile from '@/components/ui/home/ButtonRegisterMobile';
import Logo from '@/components/ui/Logo';
import Title from '@/components/ui/Title';
import ButtonRegisterDesktop from '@/components/ui/home/ButtonRegisterDesktop';

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-stretch'>
      {/*Hero Section*/}
      <section className='relative h-[300px] sm:h-[570px] sm:rounded-t-[30px]'>
        <Image
          className='sm:rounded-t-[30px]'
          src={hero}
          alt='hero picture'
          layout='fill'
          objectFit='cover'
        />
        {/*Button Register Mobile*/}
        <div className='sm:hidden absolute left-4 bottom-[70px]'>
          <ButtonRegisterMobile />
        </div>
        {/*Logo Title Button Register Desktop*/}
        <div className='hidden sm:flex absolute left-14 top-28 flex-col justify-center items-start'>
          <div className='ml-20'>
            <Logo w={'w-20'} h={'h-20'} />
          </div>
          <div className='mt-4'>
            <Title size={'text-7xl'} />
          </div>
          <div className='ml-20 mt-16'>
            <ButtonRegisterDesktop />
          </div>
        </div>
      </section>
      <section className='h-[150px] sm:h-[400px] flex justify-center items-stretch'>
        {/*About Section*/}
        <div className='hidden sm:block w-[31%] bg-[#F4C2B5] bg-opacity-80 px-7 py-12'>
          <h1 className='text-2xl text-black font-extrabold tracking-wide'>
            ACERCA DE
          </h1>
          <h1
            className='mt-4 text-gray-900 text-base font-semibold tracking-tighter leading-5
          overflow-ellipsis overflow-hidden whitespace-normal'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus maiores cumque ipsum cupiditate quod molestiae a
            veniam placeat suscipit cum corrupti quos alias consequuntur
          </h1>
        </div>
        {/*Strong Man Section*/}
        <div className='relative w-full sm:flex-grow'>
          <Image
            src={strongman}
            alt='strongman picture'
            layout='fill'
            objectFit='cover'
          />
          <div className='absolute hidden sm:block bottom-10 left-[10%]  border-gray-300 border-4 rounded-3xl p-5 w-[80%] h-[30%] '>
            <h1 className='h-full text-gray-300 text-xs text-right overflow-ellipsis overflow-hidden whitespace-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
              quis in itaque perspiciatis harum optio fugit placeat tempore? Nam
              cupiditate neque omnis laudantium eius eligendi ipsam et nesciunt
              iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h1>
          </div>
          {/*Button Begin Desktop*/}
          <div className='hidden sm:block absolute bottom-7 sm:right-20 md:right-24 lg:right-28'>
            <ButtonBeginDesktop />
          </div>
          {/*Wod Daily*/}
          <div className='sm:hidden absolute bottom-[85px] left-4 text-center'>
            <h1 className='uppercase text-white text-2xl font-extrabold tracking-tighter leading-4'>
              wod
            </h1>
            <h1 className='uppercase text-gray-400 text-[7px] tracking-[5px] leading-4 ml-1'>
              diario
            </h1>
          </div>
          {/*Button Begin Mobile*/}
          <div className='sm:hidden absolute bottom-11 left-10'>
            <ButtonBeginMobile />
          </div>
        </div>
      </section>
      {/*Last Section*/}
      <section className=' h-[450px] sm:h-[180px] flex flex-col sm:flex-row justify-center items-stretch '>
        <div className='flex-1 bg-[#262C34] order-2 sm:order-1'>
          <Stadistic />
        </div>
        <div className='flex-1 bg-[#E76C4A] order-1 sm:order-2'>
          <Crossfit />
        </div>
        <div className='flex-1 bg-[#505767] order-3'>
          <Ranking />
        </div>
      </section>
    </div>
  );
}
