import React from "react";
import "./directory-item.style.scss";
import { useNavigate } from "react-router-dom";

function DirectoryItem({ category }) {
  const { id, imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div
      key={id}
      className="directory-item-container"
      onClick={onNavigateHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
