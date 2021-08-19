import { useState, useRef, useEffect } from 'react';
import { toggleEditProfileDialog } from '@/state/dialog';
import Profile from '@/models/Profile';
import { UpdateProfile } from '@/utils/supabaseProfile';
import ButtonClose from '@/components/dialogs/ButtonClose';
import ButtonEditProfile from '@/components/dialogs/ButtonEditProfile';
import Avatar from '@/components/dialogs/Avatar';
import InputEmail from '@/components/dialogs/InputEmail';
import InputUser from '@/components/dialogs/InputUser';
import ErrorMessage from '@/components/dialogs/ErrorMessage';
import { useForm } from 'react-hook-form';

interface Message {
  type: string;
  content: string;
}

interface editProfileProps {
  profile: Profile;
  onEdit: (update: Profile) => void;
}

const EditProfile = ({ profile, onEdit }: editProfileProps) => {
  const profileAvatar = useRef(profile?.avatar_url ?? null);
  const [avatarUrlKey, setAvatarUrlKey] = useState(profile?.avatar_url ?? null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<Message | null>(null);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('email', profile?.email);
    setValue('username', profile?.username);
  }, []);

  async function editProfile(data) {
    try {
      const { username } = data;
      setMessage(null);
      setSubmitting(true);
      const updates: Profile = {
        ...profile,
        username,
        avatar_url: avatarUrlKey,
      };
      const { error } = await UpdateProfile(updates);
      if (error) throw error;
      setSubmitting(false);
      onEdit(updates);
    } catch (error) {
      setMessage({ type: 'error', content: error.message });
      setSubmitting(false);
    }
  }

  function close() {
    toggleEditProfileDialog(false);
  }

  return (
    <div className='fixed z-50 inset-0 bg-gray-800/40 overflow-auto flex justify-center items-center'>
      <div
        className={`mt-10 p-4 bg-[#262C34] w-[90%] max-w-sm rounded-xl flex flex-col justify-center items-stretch space-y-3
          ${submitting ? 'animate-pulse' : null}
          `}
      >
        {/*-------------------------Close Button-----------------------*/}
        <ButtonClose onClose={close} disabled={submitting} />
        {/*-------------------------Html Form--------------------------*/}
        <form
          onSubmit={handleSubmit(editProfile)}
          className='w-full px-4 pb-4 flex flex-col justify-between items-stretch space-y-7'
        >
          {/*-----------------------Avatar-------------------------*/}
          <Avatar
            urlKey={avatarUrlKey}
            size={100}
            onUpload={(urlKey) => {
              setAvatarUrlKey(urlKey);
            }}
          />
          {/*-----------------------Inputs-----------------------------*/}
          <InputEmail
            placeholder='Correo electronico'
            disabled={true}
            label='email'
            register={register}
            required={{ value: true, message: 'Requerido.' }}
            pattern={{
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            error={errors.email}
          />
          <InputUser
            placeholder='Usuario'
            disabled={submitting}
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

          {/*--------------------------Submit Button-------------------*/}
          <ButtonEditProfile disabled={submitting} />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
