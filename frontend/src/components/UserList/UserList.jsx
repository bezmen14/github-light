import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGithubUsers } from '../../redux/actionCreators/githubUsersAC';
import UserListCard from '../UserListCard/UserListCard';


function UserList() {

  const userList = useSelector(state => state.githubUsers);
  console.log(userList);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getRandomGithubUsers())
  // }, [])

  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(getRandomGithubUsers());
  };

  return (
    <React.Fragment>
      <button onClick={changeHandler} type="button" class="btn btn-outline-secondary">Get random users</button>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {userList.map(el =>
              <UserListCard key={el.id} id={el.id} login={el.login} avatar={el.avatar_url} url={el.html_url} >
              </UserListCard>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserList;
