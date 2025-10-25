import React from "react";
import styles from "./Tickets.module.css";
import image from "../../assets/image.png";
import qr from "../../assets/qr.png";

const Tickets = () => {
  const ticket = [
    {
      id: 1,
      name: "Robin",
      lastname: "Vikström",
      age: 32,
      to: "Eckerö",
      from: "Uppsala",
      person: "1993-02-03",
      sek: "200kr",
      time: "Lördag 15:00",
    },
    {
      id: 2,
      name: "Rickard",
      lastname: "Lövgren",
      age: 32,
      to: "Eckerö",
      from: "Uppsala",
      person: "1993-02-24",
      sek: "200kr",
      time: "Lördag 15:00",
    },
    {
      id: 3,
      name: "Andreas",
      lastname: "Gottschalk",
      age: 33,
      to: "Eckerö",
      from: "Uppsala",
      person: "1992-03-30",
      sek: "200kr",
      time: "Lördag 15:00",
    },
    {
      id: 4,
      name: "William",
      lastname: "Lehto",
      age: 32,
      to: "Eckerö",
      from: "Uppsala",
      person: "1993-12-27",
      sek: "200kr",
      time: "Lördag 15:00",
    },
    {
      id: 5,
      name: "Calle",
      lastname: "Watz",
      age: 31,
      to: "Eckerö",
      from: "Uppsala",
      person: "1994-01-17",
      sek: "200kr",
      time: "Lördag 15:00",
    },
    {
      id: 6,
      name: "Jesper",
      lastname: "Hellman",
      age: 34,
      to: "Eckerö",
      from: "Uppsala",
      person: "1991-09-12",
      sek: "200kr",
      time: "Lördag 15:00",
    },
  ];

  return (
    <div className={styles.container}>
      {ticket.map((u) => (
        <div className={styles.card} key={u.id}>
          <img src={image} alt="Eckerölinjen logotyp" className={styles.logo} />
          <h4 className={styles.black}>
            {u.name} {u.lastname}
          </h4>

          <p>
            <span className={styles.label}>Från–Till:</span>
            <br /> {u.from} – {u.to}
          </p>
          <p>
            <span className={styles.label}>Personnummer:</span> <br />
            {u.person}
          </p>
          <p>
            <span className={styles.label}>Tid för avgång:</span> <br />
            {u.time}
          </p>
          <br />

          <p>
            <span className={styles.label}>SEK:</span> {u.sek}
            <img src={qr} alt="QR kod" className={styles.qr} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
