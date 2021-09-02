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
      <NavItem>
        <Link to={`/profile/${profileCard.login}/contributions`}>Contributions</Link>
      </NavItem>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={profileCard.avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt='avatar img'
          />
          <h1>{profileCard.name}</h1>
          {profileCard.location && 'Location: ' + profileCard.location}
        </div>
        <div>
          {profileCard.bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{profileCard.bio}</p>
            </React.Fragment>
          )}
          <a target='_blank' href={profileCard.html_url} className='btn btn-dark my-1'>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {profileCard.login && (
                <React.Fragment>
                  <strong>Username:</strong> {profileCard.login}
                </React.Fragment>
              )}
            </li>
            <li>
              {profileCard.company && (
                <React.Fragment>
                  <strong>Company:</strong> {profileCard.company}
                </React.Fragment>
              )}
            </li>
            <li>
              {profileCard.blog && (
                <React.Fragment>
                  <strong> Website:</strong>{profileCard.blog}

                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: 'black' }} className='card text-center'>
        <div className='badge badge-primary'>Followers: {profileCard.followers}</div>
        <div className='badge badge-success'>Following: {profileCard.following}</div>
        <div className='badge badge-light'>Public repos: {profileCard.public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {profileCard.public_gists}</div>
      </div>
      <Repos />
    </React.Fragment>
  )
}

export default UserFullCard;
