import { FC, memo } from "react";
import { twMerge } from "tailwind-merge";
interface IIconButton extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "primary" | "secondary" | "primary-outlined" | "secondary-outlined";
  disabled?: boolean;
  type?: "button" | "submit";
}
export const IconButton: FC<IIconButton> = memo(
  ({ children, className, onClick, variant, disabled, ...props }) => {
    return (
      <button
        onClick={onClick}
        className={twMerge(
          "cursor-pointer p-2 hover:bg-primary rounded-full transition-all duration-100",
          variant === "primary" &&
            "w-10 h-10 bg-baseColor text-white border-2 border-primaryBtn hover:bg-slate-200 hover:text-primaryBtn flex items-center justify-center",
          variant === "primary-outlined" &&
            "w-10 h-10 bg-white text-black border-2 border-primaryBtn hover:bg-primaryBtn hover:text-white flex items-center justify-center",
          disabled && "pointer-events-none",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
