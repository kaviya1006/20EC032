import React from "react";
const Header = () => {
  const headerStyle = { backgroundColor: "aliceblue" };
  return (
    <div>
      <header style={headerStyle}>
        <h1>Find your Trains!!</h1>
        <h1>
          <center>Book Train Tickets Here</center>
        </h1>
        <h2>
          <center>Train schedules</center>
        </h2>
        <ul>
          <li>
            <center>Nellai express</center>
          </li>
          <li>
            <center>Chennai express</center>
          </li>
          <li>
            <center>Tambaram-Nagercoil express</center>
          </li>
          <li>
            <center>Kanyakumari express</center>
          </li>
        </ul>
        <h2>
          <center>seat map</center>
        </h2>
        <ul>
          <li>
            <center>AC chair</center>
          </li>
          <li>
            <center>Second sitting</center>
          </li>
          <li>
            <center>Double decker</center>
          </li>
          <li>
            {" "}
            <center>Sleeper coaches</center>
          </li>
        </ul>
        <p>
          View your train here <a href="Next.jsx">link</a>
        </p>
      </header>
    </div>
  );
};

export default Header;
