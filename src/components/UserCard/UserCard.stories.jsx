import UserCard from "./UserCard";
import UserList from "./UserList";

export default {
  title: "Components/UserCard",
  component: UserCard,
  tags: ["autodocs"],
};

export const Default = () => {
  const handleClick = (user) => {
    console.log(`Klickade på ${user.name} (id: ${user.id})`);
    alert(`Klickade på ${user.name}`);
  };

  const users = [
    {
      id: 1,
      name: "Robin2",
      age: 32,
      color: "purple",
    },
    {
      id: 2,
      name: "Emma2",
      age: 28,
      color: "pink",
    },
    {
      id: 3,
      name: "Alfons2",
      age: 5,
      color: "yellowGreen",
    },
  ];

  return (
    <div>
      <UserCard
        id={99}
        name={"Robin"}
        age={32}
        color={"green"}
        onUserClick={() => handleClick({ id: 99, name: "Robin" })}
      />
      <UserCard
        id={100}
        name={"Emma"}
        age={29}
        color={"blue"}
        onUserClick={() => handleClick({ id: 100, name: "Emma" })}
      />
      <h1>Användarlista med map</h1>
      <UserList users={users} onUserClick={handleClick} />
    </div>
  );
};
