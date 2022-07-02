import React from "react";

const Game = (props) => {
  const { title, description, image1, image2, image3, image4, link, link1 } =
    props;
  return (
    <div>
      <h2> {title} </h2>
      <div className="imgs">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <p> {description} </p>
      {link && (
        <p>
          Source Code: <a href={link}>{link}</a>{" "}
        </p>
      )}
      {link1 && (
        <p>
          Executable: <a href={link1}>{link1}</a>{" "}
        </p>
      )}
    </div>
  );
};

export default Game;
