import styles from "./UserBox.module.css";

const UserBox = ({ title, name, age, color, onUserClick, img }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px", // ÄNDRAT: större padding
        margin: "15px", // ÄNDRAT: lite mer mellanrum
        borderRadius: "16px", // ÄNDRAT: rundare hörn
        color: "black",
        textAlign: "center",
        border: "1px solid black", // ÄNDRAT: lite tydligare ram
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // NYTT: mjuk skugga
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // NYTT: mjuk animation
      }}
    >
      <img
        src={img} // lägg till ?img=68, frågetecken, img och sedan numbret på vilket bild
        alt={`${name}`}
        style={{
          borderRadius: "50%",
          border: "2px solid #333",
          height: "200px",
          width: "200px",
          objectFit: "cover",
        }}
      />
      <h2>{title}</h2>
      <p>
        jag är {age} år gammal och heter {name}
      </p>
      <button
        onClick={onUserClick}
        style={{
          backgroundColor: "lightgrey",
          borderRadius: "10px",
          cursor: "pointer",
          border: "2px solid black",
          padding: "1rem",
          transition: "all 0.2s ease", // NYTT: gör hover-animation mjuk
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ddd";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "lightgrey";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Klicka på mig
      </button>
    </div>
  );
};

export default UserBox;
