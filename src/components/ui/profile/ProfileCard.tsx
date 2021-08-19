import Profile from '@/models/Profile';
import Avatar from '@/components/ui/Avatar';
import LevelCard from '@/components/ui/profile/LevelCard';
import TopLevelCard from '@/components/ui/profile/TopLevelCard';
import ButtonEditProfile from '@/components/ui/profile/ButtonEditProfile';
import { toggleEditProfileDialog } from '@/state/dialog';

interface profileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: profileCardProps) => {
  return (
    <div className='relative grid grid-cols-2 gap-x-6 gap-y-3 justify-items-start items-center p-8'>
      <Avatar urlKey={profile?.avatar_url} size={100} />
      <LevelCard level={profile?.fitness_level} />
      {/*--------------------Email and UserName-------------------------------*/}
      <div className='max-w-[165px]'>
        <div className='text-[#262C34] text-xl font-extrabold uppercase tracking-tighter leading-5 truncate'>
          {profile?.username}
        </div>
        <div className='text-[#262C34] text-sm font-medium tracking-tighter truncate'>
          {profile?.email}
        </div>
      </div>
      <TopLevelCard />
      {/*----------------------Button Edit Profile-----------------------------*/}
      <div className='col-span-2'>
        <ButtonEditProfile onShow={() => toggleEditProfileDialog(true)} />
      </div>
    </div>
  );
};

export default ProfileCard;
