"use client";
import { FC, useState } from "react";
import { DropDown } from "./dropdown/DropDown";
import { Posts } from "./posts/Posts";

interface Props {
  users: IUser[];
}
export const Home: FC<Props> = ({ users }) => {
  const [selected, setSelected] = useState<IUser | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex justify-end">
        <DropDown selected={selected} setSelected={setSelected} users={users} />
      </div>
      <div>
        <Posts user={selected} />
      </div>
    </div>
  );
};
