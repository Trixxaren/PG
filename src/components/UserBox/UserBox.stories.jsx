import UserBox from "./UserBox";
import grid from "./UserBox.module.css";

export default {
  title: "Components/UserBox",
  component: UserBox,
};

export const Default = () => {
  const users = [
    {
      id: 1,
      title: "Admin",
      name: "Robin",
      age: 32,
      color: "#F5F5F0",
      img: "https://i.pravatar.cc/300?img=68",
    },
    {
      id: 2,
      title: "Admin",
      name: "Emma",
      age: 28,
      color: "#E6D8C3",
      img: "https://i.pravatar.cc/300?img=44",
    },
    {
      id: 3,
      title: "Användare",
      name: "Alfons",
      age: 5,
      color: "#C2A68C",
      img: "https://place.dog/300/300?img=7",
    },
    {
      id: 4,
      title: "Användare",
      name: "Oliver",
      age: 0,
      color: "#5D866C",
      img: "https://i.pravatar.cc/300?img=2",
    },
  ];

  const handleUserClick = (name, id) => {
    console.log(`${name} med id: ${id} klickade på knappen`);
    alert(
      `${name} med id: ${id} klickade på knappen och Oliver hälsar från magen`
    );
  };

  return (
    <div className={grid.grid}>
      {users.map((user) => (
        <UserBox
          key={user.id}
          title={user.title}
          name={user.name}
          age={user.age}
          color={user.color}
          onUserClick={() => handleUserClick(user.name, user.id)}
          img={user.img}
        />
      ))}
    </div>
  );
};
