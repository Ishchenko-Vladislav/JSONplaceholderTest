"use client";
import { FC, useEffect, useState } from "react";
import { DropDown } from "./dropdown/DropDown";
import { Posts } from "./posts/Posts";

export const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await fetch(url).then((res) => res.json());
      setUsers(res);
    };
    getUsers();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex justify-end">
        <DropDown setUserId={setUserId} users={users} />
      </div>
      <div>
        <Posts userId={userId} />
      </div>
    </div>
  );
};
