import UserMap from "./UserMap";
import { UserId } from "./UserMap";

export default {
  title: "Components/UserMap",
  component: UserMap,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
      <UserMap />
      <br />
      <UserId />
    </div>
  );
};
