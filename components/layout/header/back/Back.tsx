"use client";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
interface Props {}

export const Back: FC<Props> = () => {
  const pathname = usePathname();
  const route = useRouter();

  if (pathname.includes("/comments"))
    return (
      <div className="flex gap-2 items-center cursor-pointer" onClick={() => route.push("/")}>
        <IoMdArrowRoundBack />
        Back
      </div>
    );

  return null;
};
