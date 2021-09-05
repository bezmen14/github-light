import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGithubUsers } from '../../redux/actionCreators/githubUsersAC';
import UserListCard from '../UserListCard/UserListCard';

function UserList() {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.githubUsers);
  
  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(getRandomGithubUsers());
  };

  return (
    <>
      <button onClick={changeHandler} type="button" className="mt-3 btn btn-outline-secondary">Get random users</button>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {userList.map(el =>
              <UserListCard key={el.id} id={el.id} login={el.login} avatar={el.avatar_url} url={el.html_url} >
              </UserListCard>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserList;
