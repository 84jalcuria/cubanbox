import { useState, useEffect } from 'react';
import Image from 'next/image';
import ButtonPickAvatar from '@/components/dialogs/ButtonPickAvatar';
import { supabase } from '@/utils/supabaseClient';
interface avatarProps {
  urlKey: string;
  size: number;
  onUpload: (urlKey: string) => void;
}

const Avatar = ({ urlKey, size, onUpload }: avatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
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

  async function uploadImage(event) {
    try {
      //TODO: check image type
      //event.target.preventDefault();
      if (!event.target.files || event.target.files.legth === 0) {
        throw new Error('Yout must select a image to upload');
      }
      setUploading(true);
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);
      if (error) {
        throw error;
      }
      onUpload(fileName); //Update profile and state of parent component
    } catch (error) {
      window.alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      {uploading && <div>uploading image</div>}
      {downloading && <div>downloading image</div>}
      <div
        style={{ height: size, width: size }}
        className='relative rounded-full overflow-hidden shadow-2xl'
      >
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt='avatar picture'
            layout='fill'
            objectFit='cover'
          />
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
