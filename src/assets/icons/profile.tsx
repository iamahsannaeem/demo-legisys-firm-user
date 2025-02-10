import { FC } from "react";

interface ProfileIconProps {
  color?: string;
}
export const ProfileIcon: FC<ProfileIconProps> = ({ color }) => {
  return (
    <div className="">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 14C21.93 14 23.5 15.57 23.5 17.5C23.5 19.43 21.93 21 20 21C18.07 21 16.5 19.43 16.5 17.5C16.5 15.57 18.07 14 20 14ZM20 28C17.97 28 15.57 27.18 13.86 25.12C15.55 23.8 17.68 23 20 23C22.32 23 24.45 23.8 26.14 25.12C24.43 27.18 22.03 28 20 28Z"
          fill="black"
          fillOpacity="0.54"
        />
      </svg>
    </div>
  );
};

ProfileIcon.displayName = "ProfileIcon";
