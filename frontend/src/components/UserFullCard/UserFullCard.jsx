import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { getProfile } from "../../redux/actionCreators/profileAC";
import { useDispatch, useSelector } from "react-redux";
import Repos from "../Repos/Repos";
import Contributions from "../Contributions/Contributions";
import { getContributions } from "../../redux/actionCreators/contributionsAC";
import { NavItem } from "reactstrap";

function UserFullCard() {
  const { login } = useParams();


  const profileCard = useSelector(state => state.profile);


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContributions(login))
    dispatch(getProfile(login))
  }, [])

  return (
    <React.Fragment>

      <div className='d-flex justify-content-center'>
        <div className='row mt-3'>
          <div className='col-6'>
            <div className='d-flex flex-column'>
              <img
                src={profileCard.avatar_url}
                className='round-img mb-3'
                style={{ width: '200px' }}
                alt='avatar img'
              />
            </div>
            <div >
              <ul className="list-group text-start">
                <li className="list-group-item">
                  {profileCard.login && (
                    <React.Fragment>
                      <strong>Username:</strong> {profileCard.login}
                    </React.Fragment>
                  )}
                </li>
                <li className="list-group-item">
                  {profileCard.company && (
                    <React.Fragment>
                      <strong>Company:</strong> {profileCard.company}
                    </React.Fragment>
                  )}
                </li>
                <li className="list-group-item">
                  {profileCard.blog && (
                    <React.Fragment>
                      <strong>Website:</strong> {profileCard.blog}
                    </React.Fragment>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <div className='text-start mt-3'>
                <div className='black badge-primary'>Followers: {profileCard.followers}</div>
                <div className='black badge-success'>Following: {profileCard.following}</div>
                <div className='black badge-light'>Public repos: {profileCard.public_repos}</div>
                <div className='black badge-dark'>Public Gists: {profileCard.public_gists}</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <h1>{profileCard.name}</h1>
            {profileCard.location && 'Location: ' + profileCard.location}
            {profileCard.bio && (
              <React.Fragment>
                <h3>Bio</h3>
                <p>{profileCard.bio}</p>
              </React.Fragment>
            )}
            <a target='_blank' href={profileCard.html_url} className='btn btn-dark my-1 w-75'>
              Visit GitHub Profile
            </a>
            <a style={{ color: 'white' }} className="btn btn-danger my-2 w-75">
              <Link to={`/profile/${profileCard.login}/contributions`}>Contributions</Link>
            </a>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <div className='w-50'>
            <Repos />
        </div>

      </div>

    </React.Fragment>


  )
}

export default UserFullCard;
