import Avatar from '@/components/ui/Avatar';

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <div>
        <Avatar imageUrl={profile?.avatar_url} />
      </div>
      <div>username</div>
      <div>email</div>
      <div>Editar</div>
    </div>
  );
};

export default ProfileCard;
