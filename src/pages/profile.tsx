import { useEffect } from 'react';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/router';
import Image from 'next/image';
import hero from '@/assets/hero.jpg';
import Title from '@/components/ui/Title';

const profile = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user]);
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
        {/*Profile Section*/}
        <section className='w-full h-[600px] bg-white'>
          {/*TODO: AVATAR*/}
          <div className='flex flex-col justify-center items-start space-y-2'>
            <div className='w-20 h-20 border-gray-900 border-4 rounded-full mt-8 ml-8' />
            <div className='mt-8 ml-8'>
              <h1 className='text-gray-900 text-xl font-extrabold uppercase leading-5'>
                Huracan
              </h1>
              <h1 className='text-gray-900 text-sm font-medium tracking-tighter'>
                84jalcuria@gmail.com
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default profile;
