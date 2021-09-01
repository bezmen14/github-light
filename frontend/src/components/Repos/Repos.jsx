import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileRepos } from '../../redux/actionCreators/reposAC'
import RepoItem from "../RepoItem/RepoItem";

function Repos() {

  const { login } = useParams();
  console.log(login);

  const profileRepos = useSelector(state => state.repos);
  console.log(profileRepos);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileRepos(login))
  }, [])

  return (
    <div className="list-group">
      {profileRepos.map(el =>
        <RepoItem
          key={el.id}
          id={el.id}
          name={el.name}
          url={el.html_url}
          description={el.description}
          language={el.language}
        >

        </RepoItem>
      )}
    </div>
  )
}

export default Repos;
