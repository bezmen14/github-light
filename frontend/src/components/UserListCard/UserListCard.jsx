import React from 'react';
import { Link } from 'react-router-dom';

function UserListCard({ id, avatar, login, url }) {

  return (
    <div className="card my-3">
      <div className="card shadow-sm" style={{ width: '100%' }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{login}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary"><Link style={{ textDecoration: 'none', color: 'grey' }} to={`/profile/${login}`}>Profile</Link></button>
              <a className="btn btn-sm btn-outline-secondary" target='_blank' href={url} role="button">GitHub</a>
            </div>
            <small className="text-muted">id:{id}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserListCard;
