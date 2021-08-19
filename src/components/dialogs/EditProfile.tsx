import { useState, useEffect } from 'react';
import { toggleEditProfileDialog } from '@/state/dialog';
import ButtonEditProfile from '@/components/dialogs/ButtonEditProfile';
import Profile from '@/models/Profile';
import Avatar from '@/components/dialogs/Avatar';
import PickAvatar from '@/components/dialogs/PickAvatar';
import { useForm } from 'react-hook-form';
import LevelCard from '@/components/ui/profile/LevelCard';
import TopLevelCard from '@/components/ui/profile/TopLevelCard';
import InputUser from '@/components/dialogs/InputUser';
import ErrorMessage from '@/components/dialogs/ErrorMessage';
import { supabase } from '@/utils/supabaseClient';

interface Message {
  type: string;
  content: string;
}
interface editProfileProps {
  profile: Profile;
}

const EditProfile = ({ profile }: editProfileProps) => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [username, setUsername] = useState(profile?.username);
  const [avatarObjectUrl, setAvatarObjectUrl] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    /*Set Value in username input*/
    setValue('username', profile?.username);
  }, []);

  useEffect(() => {
    /*Download image */
    if (avatarUrl) {
      downloadAvatar(avatarUrl);
    }
  }, [avatarUrl]);

  const downloadAvatar = async (path) => {
    const { data: file, error } = await supabase.storage
      .from('avatars')
      .download(path);
    if (error) {
      /*TODO delete this line becouse if not apear it is becouse is not there*/
      setMessage({ type: 'error', content: error.message });
    } else {
      /*TODO maybe public url*/
      const objectUrl = URL.createObjectURL(file);
      console.log(objectUrl);
      setAvatarObjectUrl(objectUrl);
    }
  };

  const UploadAvatar = async (e) => {
    e.preventDefault();
    if (e.target.files[0] !== undefined) {
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${profile?.id}.${fileExt}`;
      //const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setUploading(true);
      setMessage(null);
      /*Delete avatar if exits*/
      console.log(avatarUrl);
      if (avatarUrl) {
        console.log('here');
        const { error: removeError } = await supabase.storage
          .from('avatars')
          .remove([avatarUrl]);
        if (removeError)
          setMessage({ type: 'error', content: removeError.message });
      }
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);
      if (uploadError) {
        setMessage({ type: 'error', content: uploadError.message });
      } else {
        setAvatarUrl(filePath);
      }
      setUploading(false);
    } else {
      window.alert('not file');
    }
  };

  const inputAvatarRegister = register('avatar');

  const handleEditProfile = (data) => {};

  return (
    <div className='fixed z-50 inset-0 bg-gray-800/40 overflow-auto flex justify-center items-center'>
      <div
        className={`mt-10 p-4 bg-[#262C34] w-[90%] max-w-sm rounded-xl flex flex-col justify-center items-stretch space-y-3
          ${loading ? 'animate-pulse' : null}
          `}
      >
        {/*-------------------Close Button------------------------*/}
        <button
          disabled={loading}
          onClick={() => toggleEditProfileDialog(false)}
          className='focus:outline-none self-end'
        >
          <svg
            className='max-h-7 w-7 text-[#E76C4A]'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        {/*Form*/}
        <form
          onSubmit={handleSubmit(handleEditProfile)}
          className='w-full px-4 pb-4 flex flex-col justify-between items-stretch space-y-7'
        >
          {/*Card*/}
          <div className='grid grid-cols-2 justify-items-center items-center gap-x-6 gap-y-4 '>
            {/*------------------Avatar---------------------------*/}
            <div className='relative flex flex-col justify-center items-start'>
              {/*
              <Avatar
                imageUrl={avatarObjectUrl}
                contrast={true}
                loading={uploading}
              />*/}
              {/*-------------Pick Avatar Button-------------------*/}
              <label htmlFor='avatar'>
                <input
                  {...inputAvatarRegister}
                  onChange={(e) => {
                    inputAvatarRegister.onChange(e);
                    UploadAvatar(e);
                  }}
                  type='file'
                  id='avatar'
                  accept='image/*'
                  style={{ display: 'none' }}
                />
                <div className='absolute top-0 -left-6'>
                  <PickAvatar />
                </div>
              </label>
            </div>
            {/*-------------------------Fitness Level--------------------------*/}
            <LevelCard level={profile?.fitness_level} />
            {/*-------------------------Email and UserName---------------------*/}
            <div className='ml-4 max-w-[165px]'>
              <div className='text-white text-xl font-extrabold uppercase tracking-tighter leading-5 truncate'>
                {username}
              </div>

              <div className='text-white text-sm font-medium tracking-tighter truncate'>
                {profile?.email}
              </div>
            </div>
            {/*----------------------Top Level---------------------*/}
            <TopLevelCard contrast={true} />
          </div>
          <InputUser
            placeholder='Usuario'
            disabled={loading}
            label='username'
            register={register}
            required={{
              value: true,
              message: 'Requerido.',
            }}
            pattern={{
              value: /^[\dA-Za-z]+[\dA-Za-z\s]{1,50}$/,
            }}
            minLength={{
              value: 3,
              message: 'El usuario debe de tener mas de 3 caracteres',
            }}
            error={errors.username}
          />
          {/*---------------Errors Messages---------------------------*/}
          {message?.type === 'error' && (
            <ErrorMessage fontsize='text-sm' message={message.content} />
          )}

          {/*---------------------Edit Button-----------------------*/}
          <div className='w-full pt-2'>
            <ButtonEditProfile disabled={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
