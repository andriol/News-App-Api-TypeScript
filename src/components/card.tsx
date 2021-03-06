import React from "react";
import { News } from "./api";

const Card = ({ index, title, author, content, description }: News) => {
  console.log(title, author, content, description);
  return (
    <div className="article__single">
      <ul key={index}>
        <li style={{ color: "blue" }}>Title: {title}</li>
        <h4>Author: {author ? author : "no author provided"}</h4>
        <p>Content: {content}</p>
        <p>Description: {description}</p>
      </ul>
    </div>
  );
};
export default Card;
