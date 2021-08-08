import Title from '@/components/ui/Title';
import Facebook from '@/components/ui/footer/Facebook';
import Telegram from '@/components/ui/footer/Telegram';
import Twitter from '@/components/ui/footer/Twitter';

const Footer = () => {
  return (
    <div
      className='bg-[#262C34] bg-opacity-90 w-full h-44 sm:h-80 sm:rounded-b-[30px] flex flex-col justify-between items-start
    pt-9 pb-2 pl-5'
    >
      <div>
        <h1 className='hidden sm:block '>
          <Title size={'text-5xl'} />
        </h1>
        <h1 className='mt-[4px] ml-[2px] text-black text-xs font-extrabold tracking-tighter '>
          SIGUENOS EN:
        </h1>
        <div className='flex justify-start items-center space-x-3 py-3 '>
          <Twitter />
          <Facebook />
          <Telegram />
        </div>
      </div>
      <h1 className='self-center text-gray-300 text-xs font-normal tracking-tighter'>
        CUBANBOX 20201. TODOS LOS DERECHOS RESERVADOS
      </h1>
    </div>
  );
};

export default Footer;
