import { useEffect, useState } from 'react';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/router';
import Image from 'next/image';
import hero from '@/assets/hero.jpg';
import Title from '@/components/ui/Title';
import { GetProfile } from '@/utils/supabaseProfile';
import ProfileCard from '@/components/ui/profile/ProfileCard';
//import { supabase } from '@/utils/supabaseClient';
import EditProfile from '@/components/dialogs/EditProfile1';
import { useEditProfileDialog } from '@/state/dialog';
import Profile from '@/models/Profile';
import ProfileCardSkeleton from '@/components/skeleton/ProfileCardSkeleton';

export default function Box() {
  const router = useRouter();
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [isOpenEditProfileDialog, toggleEditProfileDialog] =
    useEditProfileDialog();

  useEffect(() => {
    if (!user) {
      router.replace('/');
    } else {
      handleGetProfile();
    }
  }, [user]);

  async function handleGetProfile() {
    setLoadingProfile(true);
    const { error, data } = await GetProfile(user.id);
    if (error) {
      window.alert(error.message);
    } else {
      setProfile(data);
    }
    setLoadingProfile(false);
  }

  function handleEditProfile(updates: Profile) {
    toggleEditProfileDialog(false);
    setProfile(updates);
  }

  return (
    <>
      <div className='w-full flex flex-col justify-center items-stretch'>
        {/*Hero Section*/}
        <section className='relative h-[150px] sm:h-[250px] sm:rounded-t-[30px]'>
          <Image
            className='sm:rounded-t-[30px]'
            src={hero}
            alt='hero picture'
            layout='fill'
            objectFit='cover'
          />
          {/*Title*/}
          <div className='hidden sm:block absolute left-14 top-20'>
            <Title size={'text-7xl'} />
          </div>
        </section>
        {/*----------------------TODO: Box Section----------------------*/}
        <section className='w-full h-[600px] bg-white flex justify-start items-start'>
          {/*-------------------------Profile---------------------------*/}
          {loadingProfile ? (
            <ProfileCardSkeleton />
          ) : (
            <ProfileCard profile={profile} />
          )}
        </section>
        {/*Edit Profile Dialog*/}
        {isOpenEditProfileDialog && profile && (
          <EditProfile profile={profile} onEdit={handleEditProfile} />
        )}
      </div>
    </>
  );
}

/*export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const { error, data } = await GetProfile(user.id);
  return {
    props: {
      error: error,
      profile: data,
    },
  };
};*/
