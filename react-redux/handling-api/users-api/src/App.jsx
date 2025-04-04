import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📖 User Directory</h1>
      <button onClick={() => dispatch(fetchUsers())}>🔄 Refresh</button>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            👤 {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
