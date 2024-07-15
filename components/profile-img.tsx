import Image from "next/image";

const ProfileImg = () => {
  return (
    <div className="group transform rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-0.5 shadow-lg transition ease-out hover:scale-105 hover:from-purple-700 hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-px">
      <div className="h-[36px] w-[36px] rounded-full p-px transition duration-300 group-hover:scale-105">
        <Image
          src="/profile.png"
          alt="A photo of Jesreel"
          className="rounded-full"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
};

export const ProfileImageLarge = ({ height = 70 ,
  width = 70
}) => {
  return (
    <div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10">
      <Image
        src="/profile.png"
        alt="A photo of Jesreel"
        className="rounded-full"
        width={width}
        height={height}
      />
    </div>
  );
};

export default ProfileImg;
