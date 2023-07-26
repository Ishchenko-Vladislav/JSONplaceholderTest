import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="w-10 h-10 rounded-full border-4 border-t-cyan-500 animate-spin fixed top-1/2 left-1/2 " />
  );
};
