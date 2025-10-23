import styles from "./UserMap.module.css";

const UserMap = () => {
  const users = [
    { id: 1, name: "Robin", age: 28 },
    { id: 2, name: "Emma", age: 29 },
    { id: 3, name: "Alfons", age: 20 },
    { id: 4, name: "Oliver", age: 0 },
  ];

  return (
    <div>
      {users.map((users) => (
        <div key={users.id}>
          <h3>{users.name}</h3>
          <p>Ålder: {users.age}</p>
        </div>
      ))}
    </div>
  );
};

const UserId = () => {
  const users = ["Robin", "Emma", "Alfons", "Oliver"];

  console.log(users);

  return (
    <div>
      <h2>Användare:</h2>

      {users.map((name, index) => {
        console.log("map körs på:", name);
        return (
          <p key={index}>
            {index + 1}. {name}
          </p>
        );
      })}
    </div>
  );
};
export { UserId };

export default UserMap;
