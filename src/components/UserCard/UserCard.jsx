// import styles from "./UserCard.module.css"; // importa denna om det behövs

const UserCard = ({ id, name, age, color, onUserClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,

        padding: "12px",
        borderRadius: "8px",
        margin: "5px",
        color: "white",
        textAlign: "center",
      }}
    >
      <button
        style={{
          backgroundColor: "grey",
          text: "white",
          border: "1px solid black",
          padding: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={onUserClick}
      >
        Klicka på mig
      </button>
      <p>
        {name} är {age} år gammal.
      </p>
    </div>
  );
};

export default UserCard;
