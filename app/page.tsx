import { Home } from "@/components/home/Home";

export default async function HomePage() {
  const users = await getUsers();
  return (
    <main>
      <Home users={users} />
    </main>
  );
}

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url).then((res) => res.json());
  // setUsers(res);
  return res;
};
