import { Home } from "@/components/home/Home";
import Image from "next/image";

export default async function HomePage() {
  // const users = await getUsers();
  return (
    <main>
      <Home />
    </main>
  );
}

// const getUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const res = await fetch(url).then((res) => res.json());
//   return res;
// };
