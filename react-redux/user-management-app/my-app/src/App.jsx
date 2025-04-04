import React from "react";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">👥 User Management</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
