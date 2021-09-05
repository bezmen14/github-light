import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileRepos } from '../../redux/actionCreators/reposAC'
import RepoItem from "../RepoItem/RepoItem";

function Repos() {

  const dispatch = useDispatch()
  const { login } = useParams();
  const profileRepos = useSelector(state => state.repos);

  useEffect(() => {
    dispatch(getProfileRepos(login))
  }, [])

  return (

    <div className='row'>
      <div className='col-12 '>
        <div className="accordion w-100" id="accordionExample">
          {profileRepos.map(el =>
            <RepoItem
              key={el.id}
              id={el.id}
              name={el.name}
              url={el.html_url}
              description={el.description}
              language={el.language}
              updated_at={el.updated_at}>
            </RepoItem>
          )}
        </div>
      </div>
    </div>
  )
}

export default Repos;
