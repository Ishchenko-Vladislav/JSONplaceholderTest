"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
interface Props {
  userId: number;
}

export const Posts: FC<Props> = ({ userId }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const u = `https://jsonplaceholder.typicode.com/posts`;
      const url = userId !== 0 ? u.concat("?userId=" + userId) : u;
      const res = await fetch(url).then((res) => res.json());
      setPosts(res);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-3 ">
      {posts &&
        posts.slice(0, 10).map((post) => (
          <Link
            className="w-fit hover:text-cyan-500 border p-4 flex gap-2 items-center"
            key={post.id}
            href={"/comments/" + post.id}
          >
            {post.title}
            <FaExternalLinkAlt className="inline-flex" />
          </Link>
        ))}
    </div>
  );
};
