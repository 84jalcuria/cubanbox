import Image from 'next/image';

interface avatarProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

const Avatar = ({ imageUrl, width = 40, height = 40 }: avatarProps) => {
  return (
    <div className='rounded-full bg-gray-600' style={{ width, height }}></div>
  );
};

export default Avatar;
