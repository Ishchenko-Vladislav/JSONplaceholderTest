"use client";
import { Loader } from "@/ui/loader/Loader";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
interface Props {
  user: IUser | null;
}

export const Posts: FC<Props> = ({ user }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const getPosts = async () => {
    setLoading(true);
    try {
      let url = `https://jsonplaceholder.typicode.com/posts`;
      if (user) url += `?userId=${user.id}`;
      const res = await fetch(url).then((res) => res.json());
      setPosts(res);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [user]);

  if (loading || initialLoading) return <Loader />;
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
