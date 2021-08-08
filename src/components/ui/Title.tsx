interface titleProps {
  size: string;
}

const Title = ({ size }: titleProps) => {
  return (
    <div className={`uppercase tracking-normal font-extrabold ${size}`}>
      <span className='text-white'>cuban</span>
      <span className='text-[#E76C4A]'>box</span>
    </div>
  );
};

export default Title;
