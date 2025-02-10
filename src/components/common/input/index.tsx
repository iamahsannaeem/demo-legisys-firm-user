import { CloseEye, OpenEye } from "@/assets/icons";
import { forwardRef, memo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconButton } from "../icon-button";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
  success?: string;
  labelCx?: string;
  iconCx?: string;
}

export const Input = memo(
  forwardRef<HTMLInputElement, IInput>(
    (
      {
        type = "text",
        label,
        labelCx,
        className,
        startIcon,
        endIcon,
        error,
        success,
        iconCx,
        ...props
      },
      ref,
    ) => {
      const [showPass, setShowPass] = useState(false);

      return (
        <div className="flex flex-col w-full font-roboto">
          {label && (
            <div className={twMerge(`${labelCx}`, success && "text-success")}>
              {label}
            </div>
          )}
          <div className="flex items-center relative">
            {/* TODO: Will render this markup on the presence of startIcon */}
            <div className="absolute left-3">{startIcon}</div>
            <div className="flex-1">
              <input
                ref={ref}
                type={showPass ? "text" : type}
                className={twMerge(
                  "mt-1 w-full flex-1 border-[1px] border-secondary outline-[1px]  bg-baseColor rounded-[4px] px-2 py-1 outline-secondary  hover:border-iconColor focus:border-primary focus:outline-primary hover:border-primary",
                  startIcon && "pl-10",
                  className,
                  error && "border-error focus:border-error",
                  success && "border-success",
                )}
                {...props}
              />
              <div
                className={twMerge("absolute", error && "text-error text-xs")}
              >
                {error}
              </div>
              <div
                className={twMerge(
                  "absolute",
                  success && "text-success text-xs",
                )}
              >
                {success}
              </div>
            </div>
            {/* TODO: Will render this markup on the presence of endIcon */}
            <div className={twMerge(`absolute right-2  ${iconCx} `)}>
              {endIcon}
            </div>
            <div className="absolute right-2">
              {type === "password" && (
                <IconButton
                  variant="primary-outlined"
                  className="h-6 w-6 p-1 border-0"
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <OpenEye /> : <CloseEye />}
                </IconButton>
              )}
            </div>
          </div>
        </div>
      );
    },
  ),
);

Input.displayName = "Input";
