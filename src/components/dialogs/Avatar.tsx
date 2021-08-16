import image from 'next/image';

interface avatarProps {
  imageUrl: string | null;
  contrast?: boolean;
  width?: number;
  height?: number;
}

const Avatar = ({
  imageUrl,
  width = 97,
  height = 97,
  contrast = false,
}: avatarProps) => {
  return (
    <div className='rounded-full overflow-hidden' style={{ height, width }}>
      {/*Placeholder*/}
      {!imageUrl && (
        <svg
          className={`${
            contrast ? 'text-white' : 'text-[#262C34]'
          } transform scale-125`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
            clipRule='evenodd'
          />
        </svg>
      )}
      {imageUrl && (
        <img src={imageUrl} alt='' className=' w-full h-full object-cover' />
      )}
    </div>
  );
};

export default Avatar;

/*
  
  
  
  
  */
