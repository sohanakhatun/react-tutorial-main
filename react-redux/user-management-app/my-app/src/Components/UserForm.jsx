import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../features/users/userSlice";

const UserForm = ({
  isEditable,
  setShowForm,
  selectedUser,
  setSelectedUser,
}) => {
  const { id, name, email, phone } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    phone: "",
  });

  const hideForm = () => {
    setShowForm(false);
  };

  const onSubmitHandler = () => {
    if (isEditable) {
      dispatch(editUser(selectedUser));
      hideForm();
    } else {
      dispatch(addUser(formData));
      hideForm();
    }
  };

  useEffect(() => {
    if (isEditable) {
      setFormData({ id, name, email, phone });
    }
  }, [isEditable, id, name, email, phone]);

  return (
    <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {isEditable ? "Edit User" : "Add User"}
      </h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter full name"
            value={isEditable ? selectedUser.name : formData.name}
            onChange={(e) => {
              isEditable
                ? setSelectedUser({
                    ...selectedUser,
                    [e.target.name]: e.target.value,
                  })
                : setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter email"
            value={isEditable ? selectedUser.email : formData.email}
            onChange={(e) => {
              isEditable
                ? setSelectedUser({
                    ...selectedUser,
                    [e.target.name]: e.target.value,
                  })
                : setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Phone Number"
            value={isEditable ? selectedUser.phone : formData.phone}
            onChange={(e) => {
              isEditable
                ? setSelectedUser({
                    ...selectedUser,
                    [e.target.name]: e.target.value,
                  })
                : setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
            }}
          />
        </div>

        <div className="flex justify-end space-x-2 pt-2">
          <button
            type="button"
            onClick={() => hideForm()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            {isEditable ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
