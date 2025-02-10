import { FC } from "react";

interface ResearchIconProps {
  color?: string;
}
export const LibraryIcon: FC<ResearchIconProps> = ({ color = "#9CA3AF" }) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.15809 15.5V0.5H7.27666V15.5H4.15809ZM5.19762 1.75V14.25H6.23714V1.75H5.19762ZM0 15.5V0.5H3.11857V15.5H0ZM1.03952 1.75V14.25H2.07905V1.75H1.03952ZM11.0693 0.275391L15 14.4355L12.19 15.5684L8.25934 1.4082L11.0693 0.275391ZM9.41256 2.0918L12.7585 14.1816L13.8468 13.752L10.4927 1.66211L9.41256 2.0918Z"
        fill={color}
      />
    </svg>
  );
};

LibraryIcon.displayName = "LibraryIcon";
