import RecipeDone from "./RecipeDone";

export default {
  title: "Components/RecipeDone",
  component: RecipeDone,
  tags: ["autodocs"],
};

export const Default = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <RecipeDone />
    </div>
  );
};
