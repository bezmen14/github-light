import React from "react";
import { Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReadme } from "../../redux/actionCreators/readmeAC";
import Readme from "../Readme/Readme";

function RepoItem({ id, name, url, description, language, updated_at }) {
  const dispatch = useDispatch()


  const { login } = useParams();


  const getRepoName = () => {
    dispatch(getReadme(login, name))
  }

  return (

    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={getRepoName}>{name}</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name}</h5>
            <small>{language}</small>
          </div>
          <p className="mb-1">{description}</p>
          <p className="mb-1"><a target='_blank' className="link-dark" href={url}>GitHub</a></p>
          <Readme />
          <small>Last update: {updated_at}</small>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
export default RepoItem;
