import React from "react";
import { useSelector } from "react-redux";

function Readme({ }) {
  const repo = useSelector(state => state.readme);

  return (
    <p className="mb-1"><a target='_blank' className="link-dark" href={repo.download_url}>Readme</a></p>
  )
}

export default Readme;
