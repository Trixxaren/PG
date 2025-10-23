import UserCard from "./UserCard";

const UserList = ({ users, onUserClick }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          color={user.color}
          onUserClick={() => onUserClick(user)}
        />
      ))}
    </div>
  );
};

export default UserList;
