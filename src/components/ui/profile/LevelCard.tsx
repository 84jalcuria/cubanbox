interface levelCardProps {
  level?: number;
}

const LevelCard = ({ level = 0 }: levelCardProps) => {
  return (
    <div
      className='bg-[#E76C4A] py-1 text-center w-[83px]'
      style={{ boxShadow: '7px 7px 7px rgb(0,0,0,0.3)' }}
    >
      <h1 className='text-white text-4xl text-shadow-xl mt-3'>{level}</h1>
      <h1 className='text-white opacity-80 text-xs uppercase mt-3 tracking-tighter'>
        nivel
      </h1>
    </div>
  );
};

export default LevelCard;
