import React from "react";

const NameMap = () => {
  const names = ["Robin", "Emma", "Alfons"];
  const bgColor = "red";
  const color = "white";
  const rnd = ["green", "blue", "black"];
  const randomColor = rnd[Math.floor(Math.random() * rnd.length)];
  console.log(randomColor);

  return (
    <div>
      <h1
        style={{
          backgroundColor: randomColor,
          color: color,
          width: "100px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        Names
      </h1>
      <div
        style={{
          backgroundColor: bgColor,
          color: color,
          width: "200px",
          lineHeight: "40px",
          textAlign: "center",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        {names.map((name, index) => {
          return (
            <p key={index}>
              {index + 1}. {name}
            </p>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: randomColor,
          width: "400px",
          height: "100px",
          lineHeight: "100px",
          margin: "10px auto",
          textAlign: "center",
          borderRadius: "10px",
          color: color,
        }}
      >
        Random bakgrund
      </div>
    </div>
  );
};

export default NameMap;

// const UserMap = () => {
//   const users = [
//     { id: 1, name: "Robin", age: 28 },
//     { id: 2, name: "Emma", age: 29 },
//     { id: 3, name: "Alfons", age: 20 },
//     { id: 4, name: "Oliver", age: 0 },
//     { id: 5, name: "Hanna", age: 25 },
//   ];

//   return (
//     <div>
//       {users.map((users) => (
//         <div key={users.id}>
//           <h3>{users.name}</h3>
//           <p>Ålder: {users.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
