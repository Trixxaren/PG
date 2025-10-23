const User = ({ name, age, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <p>
        Jag heter {name} och är {age} år gammal.
      </p>
    </div>
  );
};

export default User;
