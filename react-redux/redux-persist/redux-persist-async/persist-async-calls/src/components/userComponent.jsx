// src/features/users/userComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';

const UserComponent = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h2>User List</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {list.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to load users.</p>}
    </div>
  );
};

export default UserComponent;
