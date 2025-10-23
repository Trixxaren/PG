import React from "react";
import styles from "./RecipeDone.module.css";

const randomColor = () => {
  const randomNumber = Math.floor(Math.random() * 8); // 0 eller 1
  if (randomNumber === 0) {
    return "red";
  } else if (randomNumber === 1) {
    return "pink";
  } else if (randomNumber === 2) {
    return "blue";
  } else if (randomNumber === 3) {
    return "yellow";
  } else if (randomNumber === 4) {
    return "brown";
  } else if (randomNumber === 5) {
    return "purple";
  } else if (randomNumber === 6) {
    return "orange";
  } else {
    return "green";
  }
};

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: randomColor(),
      }}
    >
      <h3 className={styles.title}>{recipe.title}</h3>
      {recipe.img && (
        <img className={styles.img} src={recipe.img} alt={recipe.title} />
      )}
      <p className={styles.desc}>{recipe.description}</p>
      <ul className={styles.todo}>
        {recipe.todo.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

const RecipeDone = () => {
  const recipes = [
    {
      title: "Pannkaka",
      description: "En av dom godaste pannkakorna",
      img: "https://i.pravatar.cc/301",
      todo: [
        "ta ett ägg, knäck ägget i smeten.",
        "rör ihop med vetemjölet och smöret.",
        "stek",
      ],
    },
    {
      title: "Äggröra",
      description: "Kladdig äggröra som går att göra på 5mminuter....",
      img: "https://i.pravatar.cc/302",
      todo: [
        "ta ett ägg",
        "knäck ägget i smeten.",
        "Hetta upp en panna",
        "rör om medans du steker äggröran",
      ],
    },
    {
      title: "Äggröra",
      description: "Kladdig äggröra som går att göra på 5mminuter....",
      img: "https://i.pravatar.cc/303",
      todo: [
        "ta ett ägg",
        "knäck ägget i smeten.",
        "Hetta upp en panna",
        "rör om medans du steker äggröran",
      ],
    },
    {
      title: "Äggröra",
      description: "Kladdig äggröra som går att göra på 5mminuter....",
      img: "https://i.pravatar.cc/304",
      todo: [
        "ta ett ägg",
        "knäck ägget i smeten.",
        "Hetta upp en panna",
        "rör om medans du steker äggröran",
      ],
    },
    {
      title: "Äggröra",
      description: "Kladdig äggröra som går att göra på 5mminuter....",
      img: "https://i.pravatar.cc/305",
      todo: [
        "ta ett ägg",
        "knäck ägget i smeten.",
        "Hetta upp en panna",
        "rör om medans du steker äggröran",
      ],
    },
    {
      title: "Äggröra",
      description: "Kladdig äggröra som går att göra på 5mminuter....",
      img: "https://i.pravatar.cc/306",
      todo: [
        "ta ett ägg",
        "knäck ägget i smeten.",
        "Hetta upp en panna",
        "rör om medans du steker äggröran",
      ],
    },
  ];

  return (
    <div className={styles.wrap}>
      {recipes.map((r, idx) => (
        <RecipeCard key={idx} recipe={r} />
      ))}
    </div>
  );
};

export default RecipeDone;
