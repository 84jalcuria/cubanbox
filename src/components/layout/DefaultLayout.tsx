import Image from 'next/image';
import background from '@/assets/background.jpg';
import Footer from '@/components/ui/footer/Footer';
import NavBarDesktop from '@/components/ui/navbar/NavBarDesktop';
import NavBarMobile from '@/components/ui/navbar/NavBarMobile';

const DefaultLayout = ({ children }) => {
  return (
    <div className='relative min-h-screen w-full'>
      {/*Background Image*/}
      <Image
        src={background}
        alt='background picture'
        layout='fill'
        objectFit='cover'
      />
      {/*Body Section*/}
      <div className='relative z-50 bg-transparent flex flex-col justify-center items-center sm:py-16'>
        <div
          className='relative flex-grow w-full sm:w-10/12 xl:w-8/12 sm:rounded-3xl sm:shadow-2xl 
          flex flex-col justify-between items-stretch bg-transparent'
        >
          {/*Navigation Bar Desktop*/}
          <div className='hidden sm:block absolute z-50 top-7  sm:right-14 '>
            <NavBarDesktop />
          </div>
          {/*Filled*/}
          <div className='sm:hidden w-full h-14 bg-transparent' />
          {/*Navigation Bar Mobile*/}
          <div className='fixed z-50 sm:hidden w-full'>
            <NavBarMobile />
          </div>
          {/*Pages Section*/}
          <div className='flex-grow bg-transparent '>{children}</div>
          {/*Footer Section*/}
          <div className='flex-grow-0'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

/*

*/
