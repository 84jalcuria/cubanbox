interface buttonNavBarDesktopProps {
  caption: string;
  fontsize: string;
}

const ButtonNavBarDesktop = ({
  caption,
  fontsize,
}: buttonNavBarDesktopProps) => {
  return (
    <h1
      className={`text-white ${fontsize} font-normal tracking-tighter uppercase cursor-pointer`}
    >
      {caption}
    </h1>
  );
};

export default ButtonNavBarDesktop;
