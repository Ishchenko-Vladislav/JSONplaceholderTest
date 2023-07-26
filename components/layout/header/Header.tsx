import Link from "next/link";
import { FC } from "react";
import { Back } from "./back/Back";
interface Props {}

export const Header: FC<Props> = () => {
  return (
    <div className="h-10 max-w-screen-xl mx-auto items-center justify-between flex mb-4 w-full relative">
      <Back />
      <Link
        href="/"
        className="w-fit absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 block"
      >
        JSONPlaceholder
      </Link>
    </div>
  );
};
