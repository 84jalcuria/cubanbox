import { useState, useEffect } from 'react';
import Image from 'next/image';
import ButtonPickAvatar from '@/components/dialogs/ButtonPickAvatar';
import { supabase } from '@/utils/supabaseClient';
interface avatarProps {
  urlKey: string;
  size: number;
  onUploaded: (urlKey: string) => void;
  onUploading: (state: boolean) => void;
  onDownloading: (state: boolean) => void;
}

const Avatar = ({
  urlKey,
  size,
  onUploaded,
  onUploading,
  onDownloading,
}: avatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (urlKey) downloadImage(urlKey);
  }, [urlKey]);

  async function downloadImage(urlKey) {
    try {
      onDownloading(true);
      const { publicURL, error } = supabase.storage
        .from('avatars')
        .getPublicUrl(urlKey);
      if (error) throw error;
      setAvatarUrl(publicURL);
    } catch (error) {
      /*TODO: maybe some error state*/
      console.log('Error downloading avatar: ', error.message);
    } finally {
      onDownloading(false);
    }
  }

  async function uploadImage(event) {
    try {
      //TODO: check image type
      if (!event.target.files || event.target.files.legth === 0) {
        throw new Error('Yout must select a image to upload');
      }
      onUploading(true);
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);
      if (error) {
        throw error;
      }
      onUploaded(fileName); //Update profile and state of parent component
    } catch (error) {
      window.alert(error.message);
    } finally {
      onUploading(false);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
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
            className='text-white w-full h-full transform scale-125'
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
      {/*-------------Pick Avatar Button-------------------*/}
      <label htmlFor='avatar'>
        <input
          type='file'
          id='avatar'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={(event) => uploadImage(event)}
        />
        <div className=''>
          <ButtonPickAvatar />
        </div>
      </label>
    </div>
  );
};

export default Avatar;
