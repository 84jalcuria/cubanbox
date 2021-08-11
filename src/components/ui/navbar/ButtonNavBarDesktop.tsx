interface buttonNavBarDesktopProps {
  caption: string;
  fontsize: string;
  selected?: boolean;
}

const ButtonNavBarDesktop = ({
  caption,
  fontsize,
  selected = false,
}: buttonNavBarDesktopProps) => {
  return (
    <h1
      className={`${
        selected ? 'text-[#E76C4A]' : 'text-white'
      }  ${fontsize} font-normal tracking-tighter uppercase cursor-pointer`}
    >
      {caption}
    </h1>
  );
};

export default ButtonNavBarDesktop;
