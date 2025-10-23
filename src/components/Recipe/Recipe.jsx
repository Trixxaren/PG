import styles from "./Recipe.module.css";

const Recipe = (props) => {
  console.log("RecipeCard props:", props);

  const safeTodo = Array.isArray(props.todo)
    ? props.todo.filter((item) => (item ?? "").trim() !== "")
    : [];

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: props.color,
      }}
    >
      <h2>{props.title}</h2>

      {/* description är en sträng → visa som paragraf */}
      <p>{props.description}</p>

      {/* visa todo-lista endast om det finns något efter filtrering */}
      {safeTodo.length > 0 ? (
        <ul>
          {safeTodo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p style={{ opacity: 0.7 }}>Inga steg tillagda ännu.</p>
      )}
    </div>
  );
};
export default Recipe;
