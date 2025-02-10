import { FC } from "react";

interface HomeIconProps {
  color?: string;
}
export const HomeIcon: FC<HomeIconProps> = ({ color }) => {
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
          d="M23 25H25V22H26V20L25 15H10L9 20V22H10V28H19V22H23V25ZM17 26H12V22H17V26ZM10 12H25V14H10V12Z"
          fill="black"
          fillOpacity="0.54"
        />
        <path
          d="M28 26V23H26V26H23V28H26V31H28V28H31V26H28Z"
          fill="black"
          fillOpacity="0.54"
        />
      </svg>
    </div>
  );
};

HomeIcon.displayName = "HomeIcon";
