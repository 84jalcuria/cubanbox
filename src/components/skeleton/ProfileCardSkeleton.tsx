const ProfileCardSkeleton = () => {
  return (
    <div className='relative grid grid-cols-2 gap-x-6  gap-y-3 justify-items-start items-center p-5 animate-pulse'>
      <div
        className='bg-gray-300 rounded-full'
        style={{ height: 90, width: 90 }}
      ></div>
      <div className='bg-gray-300  w-20 h-24'></div>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <div className='bg-gray-300  h-5 w-24'></div>
        <div className='bg-gray-300 h-3 w-24'></div>
      </div>
      <div className='bg-gray-300  h-8 w-20'></div>
    </div>
  );
};

export default ProfileCardSkeleton;
