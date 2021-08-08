interface logoProps {
  w: string;
  h: string;
}

const Logo = ({ w, h }: logoProps) => {
  return <div className={`${w} ${h} bg-gray-300/10 rounded-full`}></div>;
};

export default Logo;
