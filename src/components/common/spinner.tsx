import { FC } from "react";
import { Puff } from "react-loader-spinner";

interface ISpinner {
  height?: string;
  width?: string;
  color?: string;
}

export const Spinner: FC<ISpinner> = ({
  height = "20",
  width = "20",
  color = "currentColor",
}) => {
  return (
    <div className="flex items-center justify-center">
      <Puff
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="puff-loading"
      />
    </div>
  );
};
