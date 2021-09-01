import React from "react";

function RepoItem({ id, name, url, description, language }) {

  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{name}</h5>
        <small>{language}</small>
      </div>
      <p className="mb-1">{description}</p>
      <small>{url}</small>
    </a>
  )
}
export default RepoItem;
