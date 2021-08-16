interface topLevelCardProps {
  contrast?: boolean;
}

const TopLevelCard = ({ contrast = false }: topLevelCardProps) => {
  return (
    <div
      className={`border-2 ${
        contrast ? 'border-white' : 'border-[#262C34]'
      }  flex justify-between items-center mt-1 w-[83px]`}
    >
      <h1
        className={`flex-grow ${
          contrast ? 'text-white' : 'text-[#262C34]'
        }  text-sm font-medium text-center`}
      >
        100
      </h1>
      <div
        className={`${
          contrast ? 'bg-white' : 'bg-[#262C34]'
        }  text-transparent w-[32%]`}
      >
        k
      </div>
    </div>
  );
};

export default TopLevelCard;
