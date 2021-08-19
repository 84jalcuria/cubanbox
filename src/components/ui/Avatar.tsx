import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import Image from 'next/image';
interface avatarProps {
  urlKey: string;
  size: number;
}
const Avatar = ({ urlKey, size }: avatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (urlKey) downloadImage(urlKey);
  }, [urlKey]);

  async function downloadImage(urlKey) {
    try {
      setDownloading(true);
      const { publicURL, error } = supabase.storage
        .from('avatars')
        .getPublicUrl(urlKey);
      if (error) throw error;
      setAvatarUrl(publicURL);
    } catch (error) {
      /*TODO: maybe some error state*/
      console.log('Error downloading avatar: ', error.message);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div
      style={{ height: size, width: size }}
      className='relative rounded-full overflow-hidden shadow-2xl'
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt='avatar picture'
          layout='fill'
          objectFit='cover'
        />
      ) : (
        <svg
          className='text-[#262C34] w-full h-full transform scale-125'
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
    </div>
  );
};

export default Avatar;

/*


{!imageUrl && (
  
)}


*/
