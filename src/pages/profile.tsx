import { useEffect, useState } from 'react';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/router';
import Image from 'next/image';
import hero from '@/assets/hero.jpg';
import Title from '@/components/ui/Title';
import { GetProfile } from '@/utils/supabaseProfile';
import ProfileCard from '@/components/ui/profile/ProfileCard';
import { supabase } from '@/utils/supabaseClient';

export default function Profile() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      console.log('adfasfafsafsd');
      router.replace('/');
    }
  }, [user]);

  return (
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
      {/*Profile Section*/}
      <section className='w-full h-[600px] bg-white'>
        {/*TODO: AVATAR*/}
      </section>
    </div>
  );
}

/*export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    console.log('Not user');
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const { profile, error } = await GetProfile(user.id);

  return {
    props: {
      error,
      profile,
    },
  };
};*/
