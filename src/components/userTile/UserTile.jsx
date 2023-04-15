import { useUser } from "../../providers/UserProvider";

export default function UserTile() {
  const { user } = useUser();

  return (
    <div>
      <span>{user?.email}</span>
    </div>
  );
}
