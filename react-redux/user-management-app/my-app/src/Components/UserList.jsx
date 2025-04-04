import React, { useState } from "react";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from "react-redux";
import { editUser, removeUser } from "../features/users/userSlice";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser,setSelectedUser]=useState([]);
  const editHandler = (user) => {
    dispatch(editUser(user));
    setIsEditable(true);
    setShowForm(true);
    setSelectedUser(user);
  };

  const addHandler = () => {
    setShowForm(true);
    setIsEditable(false);
  };

  return (
    <div>
      {/* Add User Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => addHandler()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          ➕ Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => editHandler(user)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm ? (
        <div className="mt-6">
          <UserForm isEditable={isEditable} setShowForm={setShowForm} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserList;
