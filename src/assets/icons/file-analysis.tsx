import { FC } from "react";

interface ResearchIconProps {
  color?: string;
}
export const FileAnalysisIcon: FC<ResearchIconProps> = ({
  color = "#9CA3AF",
}) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.06628 9.77344L8.35613 10.4766L7.06996 9.20312V13.5H6.05997V9.20312L4.7738 10.4766L4.06365 9.77344L6.56497 7.28906L9.06628 9.77344ZM15 11.3516L10.6049 15.7109L8.48238 13.6016L9.19253 12.8984L10.6049 14.2891L14.2898 10.6484L15 11.3516ZM1.00999 15H8.07996V16H0V0H8.798L13.1299 4.28906V10.0234L12.1199 11.0234V5H8.07996V1H1.00999V15ZM9.08995 4H11.4019L9.08995 1.71094V4Z"
        fill={color}
        fillOpacity="0.5"
      />
    </svg>
  );
};

FileAnalysisIcon.displayName = "FileAnalysisIcon";
