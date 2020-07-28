import React, { useState, useEffect } from "react";

export default function Tile(props) {
  const [styleP, setStyleP] = useState({
    backgroundColor: "#1476d8",
    width: "10em",
    height: "10em",
    cursor: "pointer",
    position: "relative",
    opacity: "1",
    margin: "1em",
    borderRadius: "5px",
    boxShadow: "0px 2px 3px #0a4580",
  });
  const [styleImg, setStyleImg] = useState({
    objectFit: "cover",
    width: "10em",
    height: "10em",
    opacity: "0",
    pointerEvents: "none",
    borderRadius: "5px",
  });

  function reveal() {
    setStyleP((prev) => {
      return {
        ...prev,
        backgroundColor: "transparent",
      };
    });
    setStyleImg((prev) => {
      return {
        ...prev,
        opacity: 1,
      };
    });
  }

  function hide() {
    setStyleP((prev) => {
      return {
        ...prev,
        backgroundColor: "#1476d8",
      };
    });
    setStyleImg((prev) => {
      return {
        ...prev,
        opacity: 0,
      };
    });
  }

  function tileHover() {
    if (styleP.backgroundColor === "transparent") {
      return;
    } else {
      setStyleP((prev) => {
        return {
          ...prev,
          backgroundColor: "#3a8cde",
        };
      });
    }
  }

  function tileHoverOut() {
    if (styleP.backgroundColor === "transparent") {
      return;
    } else {
      setStyleP((prev) => {
        return {
          ...prev,
          backgroundColor: "#1476d8",
        };
      });
    }
  }

  return (
    <p
      style={styleP}
      onClick={styleP.backgroundColor !== "transparent" ? reveal : hide}
      onMouseEnter={tileHover}
      onMouseLeave={tileHoverOut}
    >
      <img alt="" style={styleImg} src={props.imgsource} />
    </p>
  );
}
