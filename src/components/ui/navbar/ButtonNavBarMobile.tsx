import Image from 'next/image';

interface buttonNavBarMobileProps {
  caption: string;
  fontsize: string;
  src: StaticImageData;
  onClose: () => void;
  selected?: boolean;
}

const ButtonNavBarMobile = ({
  caption,
  fontsize,
  src,
  onClose,
  selected = false,
}: buttonNavBarMobileProps) => {
  return (
    <button type='button' onClick={onClose} className='focus:outline-none '>
      <div className='p-4 flex justify-center items-center space-x-5'>
        <div className='relative w-10 h-10 transform scale-150'>
          <Image src={src} alt='' layout='fill' objectFit='cover' />
        </div>
        <h1
          className={`${
            selected ? 'text-[#E76C4A]' : 'text-white'
          }    ${fontsize} font-light tracking-wide uppercase cursor-pointer`}
        >
          {caption}
        </h1>
      </div>
    </button>
  );
};

export default ButtonNavBarMobile;
