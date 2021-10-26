import React from "react";
import "../Header/Header.scss";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header>
      <nav>
        <a href=" " onClick={() => history.push("/")} >
          HOME
        </a>
        <a href=" " onClick={() => history.push("/admin")} >
          ADMIN
        </a>
      </nav>
    </header>
  );
};

export default Header;
