import { FC } from "react";

interface Props {
  users: IUser[];
  setUserId: (id: number) => void;
}

export const DropDown: FC<Props> = ({ users, setUserId }) => {
  return (
    <select onChange={(e) => setUserId(+e.target.value)} className="max-w-xs w-full" name="" id="">
      <option key={"default"} value={0}>
        default
      </option>
      {users.map((user) => (
        <option className="truncate" key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};
