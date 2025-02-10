import { ProfileIcon } from "@/assets/icons/profile";
import { ShortLogo } from "@/assets/icons/short-logo";

export const ChatViewer = () => {
  return (
    <div className="flex-1 flex flex-col  overflow-y-auto gap-2  overflow-auto  overflow-x-hidden">
      <div className="my-5 mx-2 flex w-[80%] max-w-fit">
        <ShortLogo />
        <div className="text-sm font-normal">
          <div>Hi Arnoud! Welk onderzoek wil je dat ik verricht?</div>
          <div className="text-xs">17:12</div>
        </div>
      </div>
      <div className="flex  w-[80%] max-w-fit p-2 pl-4 mx-2 self-end justify-end bg-baseColor rounded-xl">
        <div className="text-sm font-normal ">
          Hello, How can i help? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non laudantium magni ab lorem lorem Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quae
          cum dolorum cupiditate ipsa fugiat aperiam ab sint quas quo,
          exercitationem, deleniti ex consequatur quisquam, ducimus adipisci?
          Itaque, animi!
        </div>
        <div className="flex flex-col justify-between">
          <ProfileIcon />
          <div className="text-xs">17:12</div>
        </div>
      </div>
    </div>
  );
};
