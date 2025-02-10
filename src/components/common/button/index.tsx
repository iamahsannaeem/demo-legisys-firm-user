import { ButtonHTMLAttributes, FC, memo } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../spinner";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  variant?: "filled" | "outlined";
  className?: string;
  submitting?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<IButton> = memo(
  ({
    color = "primary",
    children,
    className,
    variant = "filled",
    submitting,
    disabled,
    onClick,
    ...props
  }) => {
    return (
      <button
        className={twMerge(
          "px-6 py-2 rounded-full flex items-center justify-center gap-2",
          color === "primary" &&
            variant === "filled" &&
            "bg-primary text-white border-2 border-primary  hover:shadow-lg",
          color === "secondary" &&
            variant === "filled" &&
            "bg-secondary text-white border-2 border-secondary  hover:shadow-lg",
          color === "primary" &&
            variant === "outlined" &&
            "bg-white text-primary border-2 border-primary  hover:shadow-lg",
          color === "secondary" &&
            variant === "outlined" &&
            "bg-white text-secondary border-2 border-secondary  hover:shadow-lg",
          submitting &&
            variant === "filled" &&
            "hover:bg-primaryBtn hover:text-white opacity-75 pointer-events-none",
          submitting &&
            variant === "outlined" &&
            "hover:bg-primaryBtn hover:text-white opacity-75 pointer-events-none",
          disabled && "opacity-50 pointer-events-none hover:cursor-not-allowed",
          className,
        )}
        onClick={(e) => {
          if (submitting || disabled) return;
          if (onClick) {
            onClick(e);
          }
        }}
        {...props}
      >
        {children}
        {submitting && <Spinner />}
      </button>
    );
  },
);

Button.displayName = "Button";
