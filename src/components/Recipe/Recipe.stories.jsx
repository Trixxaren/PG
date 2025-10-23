import Recipe from "./Recipe";

export default {
  title: "Components/Recipe",
  component: Recipe,
  tags: ["autodocs"],
};

export const Default = () => {
  const recipes = [
    {
      id: 1,
      title: "Pannkakor",
      description: ["Koka vatten, häll i sås", "koka såsen"],
      todo: ["Vispa smet", "Hetta upp stekpannan", "Stek på båda sidor"],
      color: "Yellow",
    },
    {
      id: 2,
      title: "Pasta Carbonara",
      description: ["Koka vatten, häll i sås", "koka såsen"],
      todo: ["Koka pasta", "Stek bacon", "Blanda med ägg och ost"],
      color: "Green",
    },
    {
      id: 3,
      title: "Chokladbollar",
      description: ["1. Koka vatten, häll i sås", "koka såsen"],
      todo: ["Blanda ingredienser", "Forma bollar", "Rulla i kokos"],
      color: "Brown",
    },
    {
      id: 4,
      title: "Soppa",
      description: ["", "", ""],
      todo: ["Blanda ingredienser", "rör om", "Servera med bröd"],
      color: "Purple",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mina recept</h1>
      {/* 1) Rendera korten */}
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          todo={recipe.todo}
          color={recipe.color}
        />
      ))}

      {/* 2) Separat lista med index + titel */}
      <div style={{ marginTop: "20px" }}>
        <h3>Index + titel </h3>
        {recipes.map((recipe, index) => (
          <p key={`idx-${recipe.id}`}>
            {index}: {recipe.title}
          </p>
        ))}
      </div>
    </div>
  );
};
